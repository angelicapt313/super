import { getData } from "../components/ApiCalls";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import NotificationService from '../services/NotificationService';

const Products = () => {

  const [productos, setProductos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        
        if(!sessionStorage.getItem("productList")){
          var prodList = await getData(process.env.REACT_APP_getProducts);
          sessionStorage.setItem("productList",  JSON.stringify(prodList));
          setProductos(prodList);
         
        }else{
        
          var cachedProducts = sessionStorage.getItem("productList");

          setProductos(JSON.parse(cachedProducts));
        }
      } catch (error) {
        
        setModalOpen(true);
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

      {
       <NotificationService isOpen={isModalOpen} onClose={closeModal} children={"Error Loading Products"}></NotificationService>
      }
    </div>
  )

};
export default Products;
