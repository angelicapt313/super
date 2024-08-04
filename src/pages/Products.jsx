import { getData } from "../components/ApiCalls";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";


const Products = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        let products = await getData(process.env.REACT_APP_getProducts);

        setProductos(products);

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 items-center">
      {productos.map((item) => (
        <div key={item.ProductID}>
          <ProductCard product={item} />
        </div>

      ))}
    </div>
  )

};
export default Products;
