import React, { useState } from 'react';
import Papa from 'papaparse';
import { v4 as uuidv4 } from 'uuid';

export class Product {
  ProductID = uuidv4().toString();
  StoreID = "";
  ProductName = "";
  ProductDescription = "";
  ProductPrice = 0;
  ProductQuantity = 0;
  ProductDiscount = 0;
  ProductImageName = "";
  isDeleted = false;
      
}

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [payload, createPayload] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
 
    
    Papa.parse(file, {
      header: true,
      complete: async (results) => {
        
        createPayload(results.data);
        
        const response = await fetch(process.env.REACT_APP_uploadCSV, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify<Product>(payload)
        });

        if (response.ok) {
          alert('File uploaded successfully!');
          
        } else {
          alert('Failed to upload file.');
          
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
