select
    order_year
    , sum(total_revenue) as rev_by_year

from rev_vs_mkt_by_month

group by 1