---
title: Preparing
hide_title: true
sidebar_position: 10
---

## Prepping the Data

To start, I explored the raw data within BigQuery. The resulting prep queries can be found in the project's [/analyses](https://github.com/thedatadavis/batch-analytics/tree/main/batch/analytics/analyses) directory. The queries are organized by the rough order in which I progressed through the dataset.

During that process, I discovered a subset of records that were problematic from a quality standpoint. I handcoded this list and it can be found in the [/data/exceptions.csv](https://github.com/thedatadavis/batch-analytics/blob/main/batch/analytics/data/exceptions.csv) file.

Once the `orders` table was ready, I exported it to another CSV file ([data/orders.csv](https://github.com/thedatadavis/batch-analytics/tree/main/batch/analytics/data/raw_orders.csv)). _Note: The entire table was exported, with a few new columns appended._

Finally, I thought it would be useful to augment the order locations with additional geographic information. Using [Wikipedia](https://en.wikipedia.org/wiki/List_of_regions_of_the_United_States) I compiled a mapping of state names to regions. This can be found in the [/data/regions.csv](https://github.com/thedatadavis/batch-analytics/blob/main/batch/analytics/data/regions.csv) file.

<LinkButton url='../ingest' label='Ingest Data'>
    Next: Ingest Data
</LinkButton>

