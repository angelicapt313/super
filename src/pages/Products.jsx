
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import NotificationService from '../services/NotificationService';

const Products = () => {

  const [productos, setProductos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const closeModal = () => setModalOpen(false);

  const filteredProducts = productos.filter(product => {
    return product;
  });

 async function fetchProducts() {
    try {

      if (sessionStorage.getItem("productList")) {

        var cachedProducts = sessionStorage.getItem("productList");

        setProductos(JSON.parse(cachedProducts));

      } else {

        await getProducts();
       
      }

    } catch (error) {

      setModalOpen(true);
      console.error('Error fetching data', error);
    }
  }

  async function getProducts() {
    
      const token = localStorage.getItem("AccessToken");

       const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
   
    await fetch(process.env.REACT_APP_getProducts, {
      method: 'GET',
      headers: headers
    }).then(response => {
      
      if (response.ok) {
        return response.body.getReader().read().then(function (result) {
          //console.log(JSON.parse(result.value));
          var decoder = new TextDecoder();
          var string = decoder.decode(result.value);
          sessionStorage.setItem("productList", string);
          setProductos(JSON.parse(string));
        });
      }

    }).finally(() => {
      console.log("Product List Loaded");
    });

  }

  useEffect(() => {
    fetchProducts();
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
