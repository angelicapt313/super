
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import NotificationService from '../services/NotificationService';
import { msalInstance } from '../authConfig';

const Products = () => {

  const [productos, setProductos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const closeModal = () => setModalOpen(false);

  const filteredProducts = productos.filter(product =>
     product.ProductName.toLowerCase().includes(searchProduct.toLowerCase()));

 async function fetchProducts() {
    try {
      if (sessionStorage.getItem("productList") && sessionStorage.getItem("productList") != "[]") {

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
    
    const apiUrl = process.env.REACT_APP_getProducts;
   
    await msalInstance.initialize();
    
    const account = msalInstance.getActiveAccount();

    if (account.length === 0) {
      throw new Error('No accounts found. Please log in.');
    }

    const tokenResponse = await msalInstance.acquireTokenSilent({
      scopes: [process.env.REACT_APP_scope],
      account: account[0]
    });

    const response = await fetch(apiUrl, {
      method: 'Get',
      headers: {
        'Authorization': 'Bearer ' + tokenResponse.accessToken,
        'Content-Type': 'application/json',
        'x-ms-date': new Date().toUTCString(),
      },
      credentials: 'include'  
    });

    if(response.ok){
   
      var products =  await response.json();
      sessionStorage.setItem("productList", JSON.stringify(products));
      setProductos(products);
    
  }}

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
