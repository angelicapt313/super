import DashboardSideMenu from "./DashboardSideMenu";
import { React, useState, useEffect } from "react";
import { getData } from '../components/ApiCalls';
import EditableTable from './EditableTable';



const Inventory = () => {
   
    const [products, setProducts] = useState([]);
  
   
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            
            if(!sessionStorage.getItem("productList")){
                var prodList = await getData(process.env.REACT_APP_getProducts);
                sessionStorage.setItem("productList",  JSON.stringify(prodList));
                setProducts(prodList);
               
              }else{
              
                var cachedProducts = sessionStorage.getItem("productList");
      
                setProducts(JSON.parse(cachedProducts));
              }
           
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const reload = async () => {
        try {
            
            if(!sessionStorage.getItem("productList")){
                var prodList = await getData(process.env.REACT_APP_getProducts);
                sessionStorage.setItem("productList",  JSON.stringify(prodList));
                setProducts(prodList);
               
              }else{
              
                var cachedProducts = sessionStorage.getItem("productList");
      
                setProducts(JSON.parse(cachedProducts));
              }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu></DashboardSideMenu>
            
            {/* Main Content */}
            <div className="flex-1 p-6">
            
             <EditableTable products={products} setProducts={setProducts} reloadData={reload} />

            </div>
        </div>
    );
}

export default Inventory;