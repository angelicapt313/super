import fetchWithAuth from './RequestService';
import { msalInstance } from '../authConfig';

const createTransactionUrl = process.env.REACT_APP_createTransaction;

export const getData = async (apiUrl) => {
  try {
    debugger
    await msalInstance.initialize();
    
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
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + tokenResponse.accessToken,
        'Content-Type': 'application/json',
        'x-ms-date': new Date().toUTCString(),
      },
      credentials: 'include'  
    });

    if(response.ok){
      alert('Product updated successfully');
      return response.json();
    }


  } catch (error) {

  }

}
export const getDataAsJson = async (apiUrl, options = {}) => {
  try {
    const token = "";

    if (!options.body) {
      options.body = '/data';
    }

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${apiUrl}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
export const postData = async (apiUrl, data) => {
  try {
    const response = await fetchWithAuth(apiUrl, '/data', {
      method: 'POST',
      body: data,
    });

    return response;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};
export const checkOutSession = async (apiUrl, data) => {
  try {
     await msalInstance.initialize();

    const token = msalInstance.getActiveAccount().idToken;

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetchWithAuth(apiUrl, '/data', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ Cart: data }),
    });

    return response;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};
export const updateProduct = async (data) => {
  try {
    await msalInstance.initialize();
    
    const apiUrl = process.env.REACT_APP_updateProducts;
   
    await msalInstance.initialize();
    
    const account = msalInstance.getActiveAccount();

    if (account.length === 0) {
      throw new Error('No accounts found. Please log in.');
    }

    const tokenResponse = await msalInstance.acquireTokenSilent({
      scopes: [process.env.REACT_APP_scope],
      account: account[0]
    });
    debugger
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + tokenResponse.accessToken,
        'Content-Type': 'application/json',
        'x-ms-date': new Date().toUTCString(),
      },
      body: JSON.stringify(data),
      credentials: 'include'  
    });
    debugger
    if(response.ok){
      alert('Product updated successfully');
      
    }

  return response.json();
  } catch (error) {

  }
};
export const deleteProduct = async (productID) => {
  try {
  
    const apiUrl = process.env.REACT_APP_deleteProduct;
   
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
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + tokenResponse.accessToken,
        'Content-Type': 'application/json',
        'x-ms-date': new Date().toUTCString(),
      },
      body: productID,
      credentials: 'include'  
    });
    
    if(response.ok){
      alert('Product updated successfully');
      
    }

  return response.json();
  } catch (error) {

  }
};
export const createTransaction = async (transaction) => {
  try {

      const token = null;

      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      };
             
      if (token) {
          headers['Authorization'] = `Bearer ${token}`;
      }

    const response = await fetch(createTransactionUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(transaction),
      withCredentials: true,
    });
    
    return response;

  } catch (error) {

    console.error('Error posting data', error);
    
  }
};
export const getUserInfo = async (userName) => {
  try {
    
    return await fetch(process.env.REACT_APP_getUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
        body: userName,
      })
  } catch (error) {
      console.error('Error fetching products:', error);
  }
};
export const getTransactions = async (apiUrl, data) => {
  try {

    
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
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + tokenResponse.accessToken,
        'Content-Type': 'application/json',
        'x-ms-date': new Date().toUTCString(),
      },
      credentials: 'include'  
    });
    
    if(response.ok){
    
    }
    
    return response;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};
