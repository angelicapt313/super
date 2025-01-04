import fetchWithAuth from './RequestService';
import { User } from '../Models/Models';

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

export const getUserInfo = async (userName) => {
  try {
    
      await fetch(process.env.REACT_APP_getUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
        body: userName,
      }).then(response => {
        
        if (response.ok) {
          return response.body.getReader().read().then(function (result) {
            debugger
            var decoder = new TextDecoder();
            var string = decoder.decode<User>(result.value);
            userName = JSON.parse(string);
          });
        }

      });
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

