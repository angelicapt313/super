import { React, useEffect, useState } from "react";
import DashboardSideMenu from "./DashboardSideMenu";
import { msalInstance } from '../authConfig';
import ProductDetailSideMenu from '../quickStoreDashboard/ProductDetailSideMenu';
import Loading from '../components/Loading'; 
const Sales = () => {
  
  const [sales, setSales] = useState([]);

  const [selectedSale, setSelectedSale] = useState(null); 
  const [loading, setLoading] = useState(true);
 
  const handleRowClick = (producto) => {
    setSelectedSale(producto);
  };

  const closeDetalle = () => {
    setSelectedSale(null); 
  };

 useEffect(() => {
    GetSales();
 }, []);

  async function GetSales () {
      try {
        
        await msalInstance.initialize();
        const account = msalInstance.getActiveAccount();
    
        if (account.length === 0) {
          throw new Error('No accounts found. Please log in.');
        }
    
        const tokenResponse = await msalInstance.acquireTokenSilent({
          scopes: [process.env.REACT_APP_scope],
          account: account[0]
        });

        const apiUrl = process.env.REACT_APP_getTransactions;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + tokenResponse.accessToken,
            'Content-Type': 'application/json',
            'x-ms-date': new Date().toUTCString(),
          },
          credentials: 'include'  
        });
    
       
        if(response.ok){
          var sales =  await response.json();
          setSales(sales);
        }


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
        {loading &&
          sales.map((sale, index) => (
            <tr key={index}
            onClick={() => handleRowClick(sale)} // Manejar clic en la fila
              className="cursor-pointer hover:bg-gray-200"
            >
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

      {/* Mostrar detalle si hay un producto seleccionado */}
      {selectedSale && (
        <ProductDetailSideMenu 
          sale={selectedSale}
          onClose={closeDetalle} // Prop para cerrar el detalle
        />
      )}

    </div>
      </div>
      
    </div>
  )
  
}

export default Sales;