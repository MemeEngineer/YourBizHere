
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
    const data = [
      {
        name: "Page A",
        uv: 4000,
        
      },
      {
        name: "Page B",
        uv: 3000,
       
      },
      {
        name: "Page C",
        uv: 2000,
      },
      {
        name: "Page D",
        uv: 2780,
      },
      {
        name: "Page E",
        uv: 1890,
      },
      {
        name: "Page F",
        uv: 2390,

      },
      {
        name: "Page G",
        uv: 3490,
      }
    ];


  return (
    <div>
        
    <BarChart
      width={500}
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
      
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
    </div>
  );
}

export default BarGraph;