import React, { useState } from 'react';
import Papa from 'papaparse';
import {msalInstance} from '../authConfig';

export class ProductUpload {
  ProductName = "";
  Description = "";
  Price = 0.00;
  StockQuantity = 0;
}

const FileUpload = async () => {

  const instance = await msalInstance();

  const [file, setFile] = useState(null);
  let payload = [];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const getStoreID = () => {
    return sessionStorage.getItem('store');
  };

  const isValidProduct = (product) => {
    return product.ProductName && product.Description && !isNaN(product.Price) && !isNaN(product.StockQuantity);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    
    Papa.parse(file, {
      header: true,
      complete: async (parsedCSV) => {
        let cleanData = parsedCSV.data.map((product) => {
          // Remove unwanted fields and convert Price to a number
          let cleanedProduct = Object.keys(product)
            .filter(key => key && !key.startsWith('_'))
            .reduce((obj, key) => {
              if (key === 'Price') {
                obj[key] = parseFloat(product[key]);
              } else if (key === 'StockQuantity') {
                obj[key] = parseInt(product[key]);
              } else {
                obj[key] = product[key];
              }
              return obj;
            }, {});
          return cleanedProduct;
        }).filter((product) => product.ProductName !== '' && isValidProduct(product));

        cleanData.map((product) => {
          product.StoreID = getStoreID();
          return product;
        });

        await instance.initialize();
        const account = instance.getActiveAccount();
    
        if (account.length === 0) {
          throw new Error('No accounts found. Please log in.');
        }
    
        const tokenResponse = await instance.acquireTokenSilent({
          scopes: [process.env.REACT_APP_scope],
          account: account[0]
        });

        const apiUrl = process.env.REACT_APP_uploadCSV;

        payload = JSON.stringify(cleanData);
      
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + tokenResponse.accessToken,
            'Content-Type': 'application/json',
            'x-ms-date': new Date().toUTCString(),
          },
          body: payload,
          credentials: 'include'  
        });
    
       
        if(response.ok){
          alert('File uploaded successfully');
        }

      }
    });

  };

  return (
    <div className="flex grid-cols-3">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button className='px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700 mr-2' onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
