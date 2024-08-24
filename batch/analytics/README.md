# Batch Analytics dbt Project

### Commands
Default: use the env variable to point to the correct profile
- The project builds via the makefile

Build with local profile:
`dbt build --profiles-dir dbt_profile.yml`

Run with local profile:
`dbt run --profiles-dir dbt_profile.yml`