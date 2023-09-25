
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
import './BarGraph.css'
  
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


    const chartData = {}
    itemCount.forEach((order) =>{
      order.lineItems.forEach((item)=> {
        
        chartData[item.item.name] ? chartData[item.item.name] += item.qty : chartData[item.item.name] = item.qty

      })
    })

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

//  console.log(data)

 let totalRevenue = 0;
 let totalItemCount =0;
 itemCount.forEach((order) =>{
    
    totalRevenue += order.orderTotal
    totalItemCount += order.totalQty

  })
  // console.log(totalRevenue)
  // console.log(totalItemCount)
  return (
    <div>
        
    <BarChart
      width={800}
      height={350}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 80
      }}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={-45} textAnchor="end" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      
      <Bar dataKey="value" fill="#000000"/>
    </BarChart>
    <table className="table">
      <thead>
        <tr>
          <th>Total Revenue</th>
          <th># of Items Sold</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${totalRevenue.toFixed(2)}</td>
          <td>{totalItemCount}</td>
        </tr>
      </tbody>
    </table>
    {/* <table>
      <thead>
        <tr>
          <th>Items</th>
          <th>Amount Sold</th>
        </tr>
      </thead>
      <tbody>
        {data.map((key) => {
            return(
              <tr>
              <td>{key}</td>
              </tr>
            )
          })}
        
      </tbody>
    </table> */}
    </div>
  );
}

export default BarGraph;