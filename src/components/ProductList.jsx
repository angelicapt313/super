// src/components/MyComponent.js

import React, { useEffect, useState } from 'react';
import { getData, postData } from '../components/ApiCalls';

const ProductList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handlePostData = async () => {
    try {
        
      const newData = { "id": "fc6ac2d8-43d4-4dbe-823c-3f768686be84"};
      const result = await postData(newData);
      
     
      setData(result);
    } catch (error) {
      console.error('Error posting data', error);
    }
  };

  return (
    <div>
      <h1>My Component</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      <button onClick={handlePostData}>Post Data</button>
    </div>
  );
};

export default ProductList;
