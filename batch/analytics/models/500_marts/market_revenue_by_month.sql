with orders as (
     select * from {{ ref('int_daily_orders_by_location') }}
)

, monthly_revenue as (
    select
        location_level
        , location
        , month_of as month_of_date
        , year(month_of) || '-' || lpad(cast(month(month_of) as varchar), 2, '0') as order_month_year
        , month(month_of) as order_month
        , year(month_of) as order_year
        , round(sum(revenue), 2) as total_revenue

    from orders

    group by all
)

, monthly_market_count as (
    select
        location_level
        , location
        , month_of as month_of_date
        , count(distinct location) over (partition by month_of) as markets_count

    from orders

    where location_level = 'city'

    group by month_of, location
)

select
    rev.*
    , mkt.* exclude(location_level, location, month_of_date)

from monthly_market_count as mkt
    left join monthly_revenue as rev
        using(location_level, location, month_of_date)

order by 1