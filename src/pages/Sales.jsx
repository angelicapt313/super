import { React, useEffect, useState } from "react";
import DashboardSideMenu from "./DashboardSideMenu";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { getTransactions } from '../components/ApiCalls';

const Sales = () => {
  const [sales, setSales] = useState([]);
  //const [storeID, getStoreID] = useState([]);

  const { instance, accounts } = useMsal();
  //const [userRoles, setUserRoles] = useState(null);
   
     useEffect(() => {
        const initialize = async () => {
            await setAuthentication();
            await fetchSales();
        };
        initialize();
  }, [accounts, instance]);
  

  const setAuthentication = async () => { 
  try {
    if (accounts.length > 0) {

      await instance.initialize();

         instance.acquireTokenSilent({
             ...loginRequest,
             account: accounts[0]
         }).then(response => {
           
           localStorage.setItem("token", response.accessToken);
           localStorage.setItem("userRoles", response.idTokenClaims.roles)
             
         })
     }
  } catch (error) {
      console.log(error);
  }
   
  };
  const fetchSales = async () => {
      try {
        
        await instance.initialize();

        const response = await getTransactions(process.env.REACT_APP_getTransactions);
          
        setSales(response);
        //console.log(response);

      } catch (error) {
          console.error('Error fetching products:', error);
      }
  };

  return (
   
    <div className="flex min-h-screen">

      <DashboardSideMenu></DashboardSideMenu>

      <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-6">Sales</h2>

      <div className="content ">
      <table className="min-w-full bg-white">
        <thead>
          <tr>

           <th className="py-2 px-4 border-b">Transaction ID</th>
            <th className="py-2 px-4 border-b">Store Name</th>
            <th className="py-2 px-4 border-b">User Name</th>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Created Date</th>
            <th className="py-2 px-4 border-b">Transaction Status</th>
          </tr>
        </thead>
        <tbody>
        {
          sales.map((sale, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{sale.TransactionsID}</td>
              <td className="py-2 px-4 border-b">{sale.StoreName}</td>
              <td className="py-2 px-4 border-b">{sale.UserName}</td>
              <td className="py-2 px-4 border-b">{sale.OrderID}</td>
              <td className="py-2 px-4 border-b">{new Date(sale.CreatedDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{sale.TransactionStatus === 0 ? "Active" : "Cancelled" }</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
      </div>
      
    </div>
  )
  
}

export default Sales;