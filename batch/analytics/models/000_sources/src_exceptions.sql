with source as (

      select * from {{ source('raw', 'exceptions') }}

)

select * from source