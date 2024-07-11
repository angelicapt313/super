// src/services/apiService.js

import fetchWithAuth from './RequestService';

export const getData = async () => {
  try {
    const data = await fetchWithAuth('/data');
    return data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await fetchWithAuth('/data', {
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
