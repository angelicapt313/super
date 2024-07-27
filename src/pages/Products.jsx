import { getData } from "../components/ApiCalls";
import { useState, useEffect } from "react";
import ProductCard  from "../components/ProductCard";


const Products = () => {

    
    const [productos, setProductos] = useState([]);
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        let p = await getData();
        setProductos(p);

       
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
        
    <div>
    {productos.map((item) => (
      <div key={item.ProductID}>
        <ProductCard product={item}/>
      </div>
    ))}
  </div>
        
   
    )

};


export default Products;
