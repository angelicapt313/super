import { getData } from "../components/ApiCalls";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import NotificationService from '../services/NotificationService';

const Products = () => {

  const [productos, setProductos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const closeModal = () => setModalOpen(false);

  const filteredProducts = productos.filter(product =>
    product.ProductName.toLowerCase().includes(searchProduct.toLowerCase())
  );


  useEffect(() => {

    const fetchData = async () => {
      try {

        if (!sessionStorage.getItem("productList")) {
          var prodList = await getData(process.env.REACT_APP_getProducts);
          sessionStorage.setItem("productList", JSON.stringify(prodList));
          setProductos(prodList);

        } else {

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
    <>
      <div className="flex justify-center">
        
        <input type="text"
          placeholder="Buscar productos..."
          value={searchProduct}
          onChange={e => setSearchProduct(e.target.value)}
          className="border rounded-full focus:border-slate-500 focus:outline-none p-2 m-2"
        />
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 items-center">
        {(searchProduct ? filteredProducts : productos).map((item) => (
          <div key={item.ProductID}>
            <ProductCard product={item} />
          </div>

        ))}

        {
          <NotificationService isOpen={isModalOpen} onClose={closeModal} children={"Error Loading Products"}></NotificationService>
        }
      </div>
    </>

  )

};
export default Products;
