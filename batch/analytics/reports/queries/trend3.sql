select
    order_month
    , order_year
    , total_revenue

from rev_vs_mkt_by_month

where order_year in (2022, 2023)

order by 2, 1