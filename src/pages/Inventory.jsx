import React, { useState, useEffect } from 'react';
import DashboardSideMenu from './DashboardSideMenu';
import EditableTable from './EditableTable';
import Loading from '../components/Loading';
import { getData } from '../components/ApiCalls'; // Assuming getData is imported from an api file

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const cachedProducts = sessionStorage.getItem("productList");
        if (cachedProducts) {
            setProducts(JSON.parse(cachedProducts));
            setLoading(false);
        } else {
            reload();
        }
    }, []);

    const reload = async () => {
        setLoading(true);
        try {
            const prodList = await getData(process.env.REACT_APP_getProducts);
            sessionStorage.setItem("productList", JSON.stringify(prodList));
            setProducts(prodList);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu />

            {/* Main Content */}
            <div className="flex-1 p-6">
                <EditableTable products={products} setProducts={setProducts} reloadData={reload} />
            </div>
        </div>
    );
};

export default Inventory;