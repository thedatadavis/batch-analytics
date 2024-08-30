---
title: Ingesting
hide_title: true
sidebar_position: 11
---

## Ingesting the Data

<LineBreak lines=1/>

```python
# init_duckdb.py
import os

import duckdb

# Set relative paths the script
script_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(script_dir)

# Construct the relative path to the database
data_dir = os.path.join(parent_dir, 'data')
db_path = os.path.join(data_dir, 'batch.duckdb')

file_imports = [
    # File name, table name
    ('raw_orders.csv', 'orders'),
    ('regions.csv', 'regions'),
    ('exceptions.csv', 'exceptions')
]

# Delete the DuckDb file if it exists
# Use os for relative pathing
try:
    os.remove(db_path)
except FileNotFoundError:
    pass

# Create to base DuckDB database
con = duckdb.connect(database=db_path)

# Create a new schema
con.execute('CREATE SCHEMA manual_imports')
con.execute('CREATE SCHEMA analytics')

# Create a new table
for tbl in file_imports:
    con.execute(f'CREATE TABLE manual_imports.{tbl[1]} AS SELECT * FROM "{os.path.join(data_dir, tbl[0])}"')
    print(f'Created table {tbl[1]}')

# Close the connection
con.close()
```
(view [file](https://github.com/thedatadavis/batch-analytics/blob/main/batch/analytics/scripts/init_duckdb.py))

<LinkButton url='../transform' label='Transform Data'>
    Next: Transform Data
</LinkButton>