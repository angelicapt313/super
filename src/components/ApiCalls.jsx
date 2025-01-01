import fetchWithAuth from './RequestService';
import { Store } from '../Models/Models';

const createTransactionUrl = process.env.REACT_APP_createTransaction;

export const getData = async (apiUrl) => {
  try {
    
    const data = await fetchWithAuth(apiUrl, '/data');
    return data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

export const getDataAsJson = async (apiUrl, options = {}) => {
  try {
 
      const token = localStorage.getItem("AccessToken");

      if(!options.body) {
        options.body = '/data';
      }
    
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials':'true',
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
    
    const response = await fetchWithAuth(apiUrl, '/data', {
      method: 'POST',
      body: JSON.stringify({ Cart: data }),
    });
    
    return response;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};

export const updateProduct = async (apiUrl, data) => {
  try {
    
    const response = await fetchWithAuth(apiUrl, '/data', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    
    return response;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};

export const createTransaction = async (transaction) => {
  try {
      const token = localStorage.getItem("AccessToken");

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
    });
    
    return response;

  } catch (error) {

    console.error('Error posting data', error);
    
  }
};

export const getStoreInfo = async () => {
  try {
      var store = new Store();
      store.StoreID =  "0c7e7b2f-a856-4fde-a655-678b7763b412";
    
      const response = await getTransactions(process.env.REACT_APP_getTransactions, store);
      
      return response;
  } catch (error) {
      console.error('Error fetching products:', error);
  }
};

export const getTransactions = async (apiUrl, data) => {
  try {
    
    const response = await fetchWithAuth(apiUrl, '/data', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    
    return response;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};

