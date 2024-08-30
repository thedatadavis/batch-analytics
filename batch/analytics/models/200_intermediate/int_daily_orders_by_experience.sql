with orders as (
    select
        *
        , concat(region,'-',division,'-',state_name,'-',city_name) as location_key

    from
        {{ ref('stg_orders') }}

    where
        is_exception is null
)

, party_orders as (
    select
        party_id
        , experience_category
        , experience_subcategory
        , 'overall' as location_level
        , 'overall' as location
        , min(placed_date) as party_order_start
        , sum(gross_revenue) as party_revenue
        , count(*) as party_order_count

    from
        orders

    group by
        party_id
        , experience_category
        , experience_subcategory

    union all

    select
        party_id
        , experience_category
        , experience_subcategory
        , 'region' as location_level
        , region as location
        , min(placed_date) as party_order_start
        , sum(gross_revenue) as party_revenue
        , count(*) as party_order_count

    from
        orders

    group by
        party_id
        , experience_category
        , experience_subcategory
        , region

    union all

    select
        party_id
        , experience_category
        , experience_subcategory
        , 'division' as location_level
        , division as location
        , min(placed_date) as party_order_start
        , sum(gross_revenue) as party_revenue
        , count(*) as party_order_count

    from
        orders as o

    group by
        party_id
        , experience_category
        , experience_subcategory
        , division

    union all

    select
        party_id
        , experience_category
        , experience_subcategory
        , 'state' as location_level
        , state_name as location
        , min(placed_date) as party_order_start
        , sum(gross_revenue) as party_revenue
        , count(*) as party_order_count

    from
        orders as o

    group by
        party_id
        , experience_category
        , experience_subcategory
        , state_name

    union all

    select
        party_id
        , experience_category
        , experience_subcategory
        , 'city' as location_level
        , city_name as location
        , min(placed_date) as party_order_start
        , sum(gross_revenue) as party_revenue
        , count(*) as party_order_count

    from
        orders as o

    group by
        party_id
        , experience_category
        , experience_subcategory
        , city_name
)

, date_series as (
    select
        unnest(generate_series(
            date '2010-01-01'
            , date '2030-12-31'
            , interval '1 day'
        )) as calendar_date
)

, date_bounds as (
    select
        *

    from
        date_series as ds

    where
        calendar_date >= (select min(placed_date) from orders)
        and calendar_date <= (select max(placed_date) from orders)
)

, experience_summary as (
    select
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , 'overall' as location_level
        , 'overall' as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from
        orders as o

    left join
        party_orders as po
            on o.party_id = po.party_id
            and o.placed_date = po.party_order_start
            and o.experience_category = po.experience_category
            and o.experience_subcategory = po.experience_subcategory
            and po.location_level = 'overall'

    group by
        o.placed_date
        , o.experience_category
        , o.experience_subcategory

    union all

    select
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , 'region' as location_level
        , o.region as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from
        orders as o

    left join
        party_orders as po
            on o.party_id = po.party_id
            and o.placed_date = po.party_order_start
            and o.experience_category = po.experience_category
            and o.experience_subcategory = po.experience_subcategory
            and po.location_level = 'region'
            and o.region = po.location

    group by
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , o.region

    union all

    select
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , 'division' as location_level
        , o.division as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from
        orders as o

    left join
        party_orders as po
            on o.party_id = po.party_id
            and o.placed_date = po.party_order_start
            and o.experience_category = po.experience_category
            and o.experience_subcategory = po.experience_subcategory
            and po.location_level = 'division'
            and o.division = po.location

    group by
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , o.division

    union all

    select
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , 'state' as location_level
        , o.state_name as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from
        orders as o

    left join
        party_orders as po
            on o.party_id = po.party_id
            and o.placed_date = po.party_order_start
            and o.experience_category = po.experience_category
            and o.experience_subcategory = po.experience_subcategory
            and po.location_level = 'state'
            and o.state_name = po.location

    group by
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , o.state_name

    union all

    select
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , 'city' as location_level
        , o.city_name as location
        , sum(o.gross_revenue) as revenue
        , count(*) as orders
        , sum(po.party_revenue) as party_revenue
        , count(distinct o.party_id) as parties
        , sum(po.party_order_count) as party_orders

    from
        orders as o

    left join
        party_orders as po
            on o.party_id = po.party_id
            and o.placed_date = po.party_order_start
            and o.experience_category = po.experience_category
            and o.experience_subcategory = po.experience_subcategory
            and po.location_level = 'city'
            and o.city_name = po.location

    group by
        o.placed_date
        , o.experience_category
        , o.experience_subcategory
        , o.city_name
)

, date_location_experience_combinations as (
    select
        d.calendar_date
        , e.experience_category
        , e.experience_subcategory
        , e.location_level
        , e.location

    from
        date_bounds as d

    cross join
        (
        select distinct
            experience_category
            , experience_subcategory
            , location_level
            , location
        from
            experience_summary
        ) as e
)

, experience_availability as (
    select distinct
        experience_category
        , experience_subcategory
        , 'overall' as location_level
        , 'overall' as location
        , experience_id
        , min(placed_date) as experience_available_date

    from
        orders as o

    group by
        experience_category
        , experience_subcategory
        , experience_id

    union all

    select distinct
        experience_category
        , experience_subcategory
        , 'region' as location_level
        , region as location
        , experience_id
        , min(placed_date) as experience_available_date

    from
        orders as o

    group by
        experience_category
        , experience_subcategory
        , region
        , experience_id

    union all

    select distinct
        experience_category
        , experience_subcategory
        , 'division' as location_level
        , division as location
        , experience_id
        , min(placed_date) as experience_available_date

    from
        orders as o

    group by
        experience_category
        , experience_subcategory
        , division
        , experience_id

    union all

    select distinct
        experience_category
        , experience_subcategory
        , 'state' as location_level
        , state_name as location
        , experience_id
        , min(placed_date) as experience_available_date

    from
        orders as o

    group by
        experience_category
        , experience_subcategory
        , state_name
        , experience_id

    union all

    select distinct
        experience_category
        , experience_subcategory
        , 'city' as location_level
        , city_name as location
        , experience_id
        , min(placed_date) as experience_available_date

    from
        orders as o

    group by
        experience_category
        , experience_subcategory
        , city_name
        , experience_id
)

, rolling_experience_count as (
    select
        dlec.calendar_date
        , dlec.experience_category
        , dlec.experience_subcategory
        , dlec.location_level
        , dlec.location
        , count(distinct case
            when ea.experience_available_date <= dlec.calendar_date then ea.experience_id
          end) as cumulative_experiences

    from
        date_location_experience_combinations as dlec

    left join
        experience_availability as ea
            on dlec.experience_category = ea.experience_category
            and dlec.experience_subcategory = ea.experience_subcategory
            and dlec.location_level = ea.location_level
            and dlec.location = ea.location

    group by
        dlec.calendar_date
        , dlec.experience_category
        , dlec.experience_subcategory
        , dlec.location_level
        , dlec.location
)

, cumulative_orders as (
    select
        c.experience_category
        , c.experience_subcategory
        , c.location_level
        , c.location
        , c.calendar_date
        , date_trunc('week', c.calendar_date) as week_of
        , date_trunc('month', c.calendar_date) as month_of
        , dayname(c.calendar_date) as day_of_week
        , day(c.calendar_date) as day_of_month
        , coalesce(e.revenue, 0) as revenue
        , coalesce(e.orders, 0) as orders
        , coalesce(e.party_revenue, 0) as party_revenue
        , coalesce(e.parties, 0) as parties
        , coalesce(e.party_orders, 0) as party_orders
        , sum(coalesce(e.revenue, 0)) over (
            partition by c.experience_category, c.experience_subcategory, c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_revenue
        , sum(coalesce(e.orders, 0)) over (
            partition by c.experience_category, c.experience_subcategory, c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_orders
        , sum(coalesce(e.party_revenue, 0)) over (
            partition by c.experience_category, c.experience_subcategory, c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_party_revenue
        , sum(coalesce(e.parties, 0)) over (
            partition by c.experience_category, c.experience_subcategory, c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_parties
        , sum(coalesce(e.party_orders, 0)) over (
            partition by c.experience_category, c.experience_subcategory, c.location_level, c.location
            order by c.calendar_date
        ) as cumulative_party_orders

    from
        date_location_experience_combinations as c

    left join
        experience_summary as e
            on c.calendar_date = e.placed_date
            and c.experience_category = e.experience_category
            and c.experience_subcategory = e.experience_subcategory
            and c.location_level = e.location_level
            and c.location = e.location
)

, experience_metrics as (
    select
        cc.*
        , rec.cumulative_experiences
        , sum(case
            when cc.cumulative_orders > 0 then 1
            else 0
          end) over (
            partition by cc.experience_category, cc.location_level, cc.location
            order by cc.experience_category, cc.experience_subcategory, cc.calendar_date
        ) as category_day_count
        , sum(case
            when cc.cumulative_orders > 0 then 1
            else 0
          end) over (
            partition by cc.experience_category, cc.experience_subcategory, cc.location_level, cc.location
            order by cc.experience_category, cc.experience_subcategory, cc.calendar_date
        ) as subcategory_day_count
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

    from
        cumulative_orders as cc

    left join
        rolling_experience_count as rec
            on cc.calendar_date = rec.calendar_date
            and cc.experience_category = rec.experience_category
            and cc.experience_subcategory = rec.experience_subcategory
            and cc.location_level = rec.location_level
            and cc.location = rec.location
)

, final as (
    select
        *

    from
        experience_metrics as em

    where
        subcategory_day_count > 0
)


select
    *

from
    final as f

order by
    experience_category
    , experience_subcategory
    , case
        when location_level = 'overall' then 0
        when location_level = 'region' then 1
        when location_level = 'division' then 2
        when location_level = 'state' then 3
        when location_level = 'city' then 4
      end
    , location
    , calendar_date
