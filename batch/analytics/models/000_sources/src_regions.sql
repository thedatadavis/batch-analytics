with source as (

      select * from {{ source('raw', 'regions') }}

)

select * from source