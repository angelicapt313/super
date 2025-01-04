import React, { useState } from 'react';
import Papa from 'papaparse';

export class ProductUpload {
  ProductName = "";
  Description = "";
  Price = 0.00;
  StockQuantity = 0;
}

const FileUpload = () => {
  const [file, setFile] = useState(null);
  let payload = [];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const getStoreID = () => {
    return localStorage.getItem('storeID');
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

              if(obj[key] = key === 'Price'){
                obj[key] = key === 'Price' ? parseFloat(product[key]) : product[key];
              
              }else  if(obj[key] = key === 'StoreId'){
                obj[key] = key === 'StoreId' ? getStoreID() : product[key];
              
              }
              else if(obj[key] = key === 'StockQuantity'){
              obj[key] = key === 'StockQuantity' ? parseInt(product[key]) : product[key];
                
              } else {
              obj[key] = product[key];
            }
              return obj;
             
            }, {});

           
          return cleanedProduct;
        }).filter((product) => product.ProductName !== '');

        payload = JSON.stringify(cleanData);
        
        let res = await fetch(process.env.REACT_APP_uploadCSV, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: payload
        });
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
