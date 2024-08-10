import { React, useEffect, useState } from "react";
import DashboardSideMenu from "./DashboardSideMenu";

const Sales = () => {
  // const [sales, setSales] = useState[[]];

  // useEffect(() => {
  //     getSales()
  // }, [setSales, sales])

  // const getSales = async (storeID, options = {}) =>  {


  //         const token = localStorage.getItem("AccessToken");

  //         const headers = {
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Credentials':'true',
  //           ...options.headers,
  //         };

  //         if (token) {
  //            headers['Authorization'] = `Bearer ${token}`;
  //         }

  //         const response = await postData('http://localhost:7071/api/CheckOutSession', cart, {
  //           ...options,
  //           headers,
  //         }).then(o => {

  //         });

  //         if (!response.ok) {

  //           const error = await response.json();
  //           throw new Error(error.message);
  //         }


  //         return response.json();

  // }

  // if (sales){

  // }
  return (
    <div className="flex min-h-screen">

      <DashboardSideMenu></DashboardSideMenu>

      <div className="flex-1 p-6">
        <h1 className="text-2xl text-center">Ventas</h1>
      </div>
    </div>
  )
}

export default Sales;