// src/services/fetchUtils.js

const baseURL = 'https://quickstore.azurewebsites.net/api/GetProducts'; // Replace with your API base URL

const fetchWithAuth = async (url, options = {}) => {
  
  const token = localStorage.getItem("AccessToken");
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  debugger
  const response = await fetch(`${baseURL}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  debugger
  return response.json();
};

export default fetchWithAuth;
