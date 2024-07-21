
const baseURL = 'https://quickstorefunctions.azurewebsites.net/api/GetProductById?';
const getUrl = 'https://quickstorefunctions.azurewebsites.net/api/GetProducts';

const fetchWithAuth = async (url, options = {}) => {
  
  const token = localStorage.getItem("AccessToken");
  
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials':'true',
    ...options.headers,
  };

  if (token) {
     headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${getUrl}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  
  return response.json();
};

export default fetchWithAuth;