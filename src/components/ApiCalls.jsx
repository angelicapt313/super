import fetchWithAuth from './RequestService';

export class Product {
  ProductID = "";
  ProductName = "";
  ProductDescription = "";
  ProductPrice = "";
  ProductQuantity = "";
  ProductDiscount = "";
  ProductImageName = "";
  isDeleted = "";
  UpdatedAt = "";
      
}

export class Cart {
  CartID = ""
  CartList = [Product]
  UserID = ""
  CartTotal = 0
  CartItemsQuantity = 0
  CartStatus = ""
  CartCreatedDate = ""
  CartFullfilledDate = ""
}

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
    debugger
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
    debugger
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

// Add other service functions as needed
