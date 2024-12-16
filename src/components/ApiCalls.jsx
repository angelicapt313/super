import fetchWithAuth from './RequestService';
import { Store } from '../Models/Models';

export const getData = async (apiUrl) => {
  try {
    
    const data = await fetchWithAuth(apiUrl, '/data');
    return data;
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

export const createTransaction = async (apiUrl, data) => {
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

