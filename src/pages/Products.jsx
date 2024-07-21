import React, {useEffect, useState, useContext} from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../CartContext';
import { getData, postData } from '../components/ApiCalls';

const Products = () => {

    const { addShopCart } = useContext(CartContext);

    const [productList, setProducts] = useState([]);

    let prodList = productList.map((prod) => {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                <div className="border p-4 rounded">
                    
                <h2 className="text-lg font-bold">{prod.ProductName}</h2>
                <p className="text-gray-700">{prod.ProductID}</p>
                    
                </div>
                </div>
        )
    })

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                
                // const response = await handlePostData();
                // debugger

                // if(!response.ok){
                //     throw new Error('Network response waws not ok');
                // }
                // const data = await response.json();
                // debugger
                debugger
                var prod = await getData();
                
                setProducts(prod);
            } catch (error) {
                console.log('Error fetching the products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handlePostData = async () => {
        try {
            
          const newData = { "id": "fc6ac2d8-43d4-4dbe-823c-3f768686be84"};
          const result = await postData(newData);

        setProducts(result);
        } catch (error) {
          console.error('Error posting data', error);
        }
      };
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Productos</h1>
            {
                prodList
            }
            
        </div>
    );
};


 // <ProductCard key={product.ProductID} product={product} addShopCart={addShopCart} />
export default Products;
