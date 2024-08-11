import { React, useEffect, useState } from "react";
import DashboardSideMenu from "./DashboardSideMenu";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Transaction, Store } from "../Models/Models";
import fetchWithAuth  from "../components/RequestService";
import { createTransaction, getTransactions, getStoreInfo } from '../components/ApiCalls';

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [storeID, getStoreID] = useState([]);

  const { instance, accounts } = useMsal();
    const [userRoles, setUserRoles] = useState(null);
   
    useEffect(() => {
        fetchSales();
      if (accounts.length > 0) {
          instance.acquireTokenSilent({
              ...loginRequest,
              account: accounts[0]
          }).then(response => {
            
            localStorage.setItem("token", response.accessToken);
            localStorage.setItem("userRoles", response.idTokenClaims.roles)
              
          }).catch(err => {
             console.log(err);
          });
      }
  }, [accounts, instance]);
  

  const fetchSales = async () => {
      try {
        var transaction = new Transaction();
        transaction.StoreID =  "0c7e7b2f-a856-4fde-a655-678b7763b412";
        
        const response = await getTransactions(process.env.REACT_APP_getTransactions, transaction);
          
        setSales(response);
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

           <th className="py-2 px-4 border-b">TransactionID</th>
            <th className="py-2 px-4 border-b">StoreID</th>
            <th className="py-2 px-4 border-b">UserID</th>
            <th className="py-2 px-4 border-b">OrderID</th>
          </tr>
        </thead>
        <tbody>
        {
            sales
          }
        </tbody>
      </table>
    </div>
      </div>
      
    </div>
  )
  
}

export default Sales;