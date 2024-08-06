import {React, useEffect, useState} from "react"

const Sales = () => {
    const [sales, setSales] = useState[[]];

    useEffect(() => {
        getSales()
    }, [setSales, sales])

    const getSales = async (storeID, options = {}) =>  {
       
        
            const token = localStorage.getItem("AccessToken");
            
            const headers = {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials':'true',
              ...options.headers,
            };
          
            if (token) {
               headers['Authorization'] = `Bearer ${token}`;
            }
            
            const response = await postData('http://localhost:7071/api/CheckOutSession', cart, {
              ...options,
              headers,
            }).then(o => {
               
            });
          
            if (!response.ok) {
                
              const error = await response.json();
              throw new Error(error.message);
            }
            
            
            return response.json();
        
    }

    if (sales){

    }
    return(
        <div></div>
    )
}