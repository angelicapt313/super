import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('/data/products.json');
                if(!response.ok){
                    throw new Error('Network response waws not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log('Error fetching the products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Productos</h1>
             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
