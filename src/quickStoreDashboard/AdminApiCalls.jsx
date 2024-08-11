
 export const postWithAuth = async (apiUrl,data, options = {}) => {
   
    const token = localStorage.getItem("AccessToken");
    
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials':'true',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        options: options,
        body: JSON.stringify(data),
      });
      
  
    if (!response.ok) {

      const error = await response.json();
      throw new Error(error.message);
    }
    
    return response;
  };

  export default postWithAuth