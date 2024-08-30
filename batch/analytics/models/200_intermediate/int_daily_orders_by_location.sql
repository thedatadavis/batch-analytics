with orders as (
    select *

    from {{ ref('stg_orders') }}
    
    where is_exception is null
)

, party_orders as (
    select
        party_id
        , min(placed_date) as party_order_start
        , sum(gross_revenue) as party_revenue
        , count(*) as party_order_count
        , region
        , division
        , state_name
        , city_name

    from orders

    group by
        party_id
        , region
        , division
        , state_name
        , city_name
)

, date_series as (
    select unnest(generate_series(
        date '2010-01-01'
        , date '2030-12-31'
        , interval '1 day'
    )) as calendar_date
)

, date_bounds as (
    select *

    from date_series

    where calendar_date >= (select min(placed_date) from orders)
        and calendar_date <= (select max(placed_date) from orders)
)

, order_summary as (
    select
        o.placed_date
        , 'region' as location_level
        , o.region as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from orders o
    left join party_orders po
        on o.party_id = po.party_id
        and o.placed_date = po.party_order_start

    group by o.placed_date, o.region

    union all

    select
        o.placed_date
        , 'division' as location_level
        , o.division as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from orders o
    left join party_orders po
        on o.party_id = po.party_id
        and o.placed_date = po.party_order_start

    group by o.placed_date, o.division

    union all

    select
        o.placed_date
        , 'state' as location_level
        , o.state_name as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from orders o
    left join party_orders po
        on o.party_id = po.party_id
        and o.placed_date = po.party_order_start

    group by o.placed_date, o.state_name

    union all

    select
        o.placed_date
        , 'city' as location_level
        , o.city_name as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from orders o
    left join party_orders po
        on o.party_id = po.party_id
        and o.placed_date = po.party_order_start

    group by o.placed_date, o.city_name
)

, date_location_combinations as (
    select
        d.calendar_date
        , o.location_level
        , o.location

    from date_bounds as d

    cross join (
        select distinct
            location_level
            , location

        from order_summary
    ) as o
)

, experience_availability as (
    select distinct
        'region' as location_level
        , region as location
        , experience_id
        , min(placed_date) as experience_available_date

    from orders

    group by region, experience_id

    union all

    select distinct
        'division' as location_level
        , division as location
        , experience_id
        , min(placed_date) as experience_available_date

    from orders

    group by division, experience_id

    union all

    select distinct
        'state' as location_level
        , state_name as location
        , experience_id
        , min(placed_date) as experience_available_date

    from orders

    group by state_name, experience_id

    union all

    select distinct
        'city' as location_level
        , city_name as location
        , experience_id
        , min(placed_date) as experience_available_date

    from orders

    group by city_name, experience_id
)

, rolling_experience_count as (
    select
        dlc.calendar_date
        , dlc.location_level
        , dlc.location
        , count(distinct case
            when ea.experience_available_date <= dlc.calendar_date then ea.experience_id
          end) as cumulative_experiences

    from date_location_combinations as dlc

    left join experience_availability as ea
        on dlc.location_level = ea.location_level
        and dlc.location = ea.location

    group by
        dlc.calendar_date
        , dlc.location_level
        , dlc.location
)

, cumulative_orders as (
    select
        c.location_level
        , c.location
        , c.calendar_date
        , date_trunc('week', c.calendar_date) as week_of
        , date_trunc('month', c.calendar_date) as month_of
        , dayname(c.calendar_date) as day_of_week
        , day(c.calendar_date) as day_of_month
        , coalesce(o.revenue, 0) as revenue
        , coalesce(o.orders, 0) as orders
        , coalesce(o.party_revenue, 0) as party_revenue
        , coalesce(o.parties, 0) as parties
        , coalesce(o.party_orders, 0) as party_orders
        , sum(coalesce(o.revenue, 0)) over (
            partition by c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_revenue
        , sum(coalesce(o.orders, 0)) over (
            partition by c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_orders
        , sum(coalesce(o.party_revenue, 0)) over (
            partition by c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_party_revenue
        , sum(coalesce(o.parties, 0)) over (
            partition by c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_parties
        , sum(coalesce(o.party_orders, 0)) over (
            partition by c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_party_orders

    from date_location_combinations as c

    left join order_summary as o
        on c.calendar_date = o.placed_date
        and c.location_level = o.location_level
        and c.location = o.location
)

, order_metrics as (
    select
        cc.*
        , rec.cumulative_experiences
        , sum(case
            when cc.cumulative_orders > 0 then 1
            else 0
          end) over (
            partition by cc.location_level, cc.location
            order by cc.calendar_date
        ) as day_count
        , case
            when cc.cumulative_orders > 0 then cc.cumulative_revenue / cc.cumulative_orders
            else 0
          end as cumulative_average_order_value
        , case
            when cc.cumulative_parties > 0 then cc.cumulative_party_revenue / cc.cumulative_parties
            else 0
          end as cumulative_average_party_value
        , case
            when rec.cumulative_experiences > 0 then cc.cumulative_revenue / rec.cumulative_experiences
            else 0
          end as cumulative_revenue_per_experience
        , case
            when rec.cumulative_experiences > 0 then cc.cumulative_party_revenue / rec.cumulative_experiences
            else 0
          end as cumulative_party_revenue_per_experience

    from cumulative_orders as cc

    left join rolling_experience_count as rec
        on cc.calendar_date = rec.calendar_date
        and cc.location_level = rec.location_level
        and cc.location = rec.location
)

, final as (
    select *

    from order_metrics

    where day_count > 0
)

select *

from final

order by
    location_level
    , location
    , calendar_date
