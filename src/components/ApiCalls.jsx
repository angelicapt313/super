// src/services/apiService.js

import fetchWithAuth from './RequestService';

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
      body: JSON.stringify(data),
    });
    
    return response;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};

// Add other service functions as needed
