with orders as (

    select
        id as order_id
        , partyid as party_id
        , userid as user_id
        , date_trunc('millisecond', placed_date) as placed_at
        , date_trunc('day', placed_date) as placed_date
        , date_trunc('millisecond', start_date) as start_at
        , date_trunc('day', start_date) as start_date
        , date_trunc('month', placed_date) as order_month
        , date_trunc('month', start_date) as experience_month
        , gross_revenue
        , experience_category
        , experience_subcategory
        , experience_hash
        , to_hex(experience_hash) as experience_hash_hex

        , concat(
            'loc-'
            , case when city = 'Boston MA' then 'boston-ma' else replace(replace(lower(city), ' ',''), ',', '-') end
            , '-xc-'
            , ifnull(experience_category,'no-exp-cat')
            , '-xs-'
            , ifnull(experience_subcategory,'no-exp-sub')
         ) as experience_surrogate_key

        , to_hex(md5(concat(
            'loc-'
            , case when city = 'Boston MA' then 'boston-ma' else replace(replace(lower(city), ' ',''), ',', '-') end
            , '-xc-'
            , ifnull(experience_category,'no-exp-cat')
            , '-xs-'
            , ifnull(experience_subcategory,'no-exp-sub')
         ))) as experience_id
        
        , case
            when o.city like '%Boston%' then 'Boston, MA'
            else o.city 
          end as order_city

        , case 
            when o.city like '%Boston%' then 'Boston'
            else split_part(o.city, ', ', 1)
          end as city_name
        
        , case 
            when o.city like '%Boston%' then 'MA'
            else split_part(o.city, ', ', 2)
          end as state_code

    from {{ ref('src_orders') }} as o

), 

region_lookup as (

      select * from {{ ref('src_regions') }}

),

exception_lookup as (

      select * from {{ ref('src_exceptions') }}

),

final as ( 

    select
        orders.*
        , region_lookup.* exclude(state_abbr)
        , exception_lookup.* exclude(order_id, party_id, user_id, experience_id, is_exception, is_excluded)
        , coalesce(is_exception, 0) as is_exception
        , coalesce(is_excluded, 0) as is_excluded
    
    from orders
    left join region_lookup
        on orders.state_code = region_lookup.state_abbr
    left join exception_lookup
        on orders.order_id = exception_lookup.order_id

)

select * from final