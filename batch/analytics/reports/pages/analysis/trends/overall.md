---
title: Overall Revenue
hide_title: true
sidebar_position: 10
queries:
  - trend0.sql
  - trend1.sql
  - trend2.sql
  - trend3.sql
---

## Revenue by month
We start with an overall look at revenue over time. Two things jump out:
1. Yearly revenue is growing precipitously -- a great sign!
2. There's a clear impact from seasonality present.

<BarChart
    data={trend0}
    x=month_of_date
    y=total_revenue
    yFmt=usd1m
/>  

## 2023 Revenue is almost 2.5x the previous year

<DataTable data={trend1}>
    <Column id=order_year fmt=id/>
    <Column id=rev_by_year title='Revenue by Year' fmt=usd1m/>
</DataTable>


## Seasonaility persists even as more markets are opened up

<ScatterPlot 
    data={trend2}
    x=markets_count
    xAxisTitle='Count of Markets'
    y=total_revenue
    yFmt=usd1m
    yAxisTitle='Monthly Revenue'
/>

## Q4 sales are soft
As shown by the past two years, sales drop greatly from the summer peak at the end of the year. This makes sense -- most people are not doing group trips as the summer ends. Besides the holidays, the weather is usually not supportive of "fun" activities.

<Heatmap
    title='Yearly Revenue by Month'
    data={trend3}
    x=order_year
    y=order_month
    value=total_revenue
    legend=false
    xSort=order_year
/>

