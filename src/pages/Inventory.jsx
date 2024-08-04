import DashboardSideMenu from "./DashboardSideMenu";
import { React, useState, useEffect } from "react";
import { getData } from '../components/ApiCalls';
import EditableTable from './EditableTable';

export class Product {
    ProductID = "";
    ProductName = "";
    ProductDescription = "";
    ProductPrice = "";
    ProductQuantity = "";
    ProductDiscount = "";
    ProductImageName = "";
    isDeleted = "";
    UpdatedAt = "";
        
}

const Inventory = () => {
   
    const [products, setProducts] = useState([]);
  
   
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getData(process.env.REACT_APP_getProducts);

            setProducts(response);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const reload = async () => {
        try {
            const response = await getData(process.env.REACT_APP_getProducts);

            setProducts(response);
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