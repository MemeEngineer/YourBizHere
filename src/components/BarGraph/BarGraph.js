
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  import * as ordersAPI from '../../utilities/order-api';
  import React, { useState, useEffect } from 'react';

  
  function BarGraph(){
    const [itemCount, setItemCount]= useState([])
    useEffect(function () {
      // Load previous orders (paid)
      async function fetchItemOrders() {
        const orders = await ordersAPI.getItemHistory();
        setItemCount(orders)
        console.log(orders)
      }
      fetchItemOrders();
    }, []);

    console.log(itemCount.length)
    const chartData = {}
    itemCount.forEach((order) =>{
      order.lineItems.forEach((item)=> {
        
        chartData[item.item.name] ? chartData[item.item.name] += item.qty : chartData[item.item.name] = item.qty

      })
    })
console.log(chartData)
// console.log(Object.keys(chartData))
// console.log(Object.values(chartData))
const data = [];
const name = Object.keys(chartData)
// const value = Object.values(chartData)
name.forEach((element) => {
  const dataValue = {}
  dataValue['name'] = element
  dataValue['value'] = chartData[element]
  data.push(dataValue)
})

// console.log(data)

  return (
    <div>
        
    <BarChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
    </div>
  );
}

export default BarGraph;