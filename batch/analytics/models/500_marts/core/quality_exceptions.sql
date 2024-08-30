with exceptions as (

    select * 
    
    from {{ ref('stg_orders') }}

    where is_exception is true

)

select *

from exceptions