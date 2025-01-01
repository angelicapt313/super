import { v4 as uuidv4 } from 'uuid';

export class Transactions {
    TransactionsID =  uuidv4();
    OrderID =  uuidv4();
    StoreID =  "";
    StoreName = "";
    UserID =  "";
    UserName = "";
    ProductList = [Product];
    CreatedDate = Date.now();
    UpdatedDate = Date.now();
    TransactionStatus = "";
  }

  export class Store {
    StoreID = "";
        
  }

  export class Product {
    ProductID = "";
    StoreID = "";
    ProductName = "";
    Description = "";
    Price = "";
    StockQuantity = "";
    CreatedAt = "";
    UpdatedAt = "";
    IsDeleted = "";
  }
  
  export class Cart {
    CartID = ""
    CartList = []
    UserID = ""
    CartTotal = 0
    CartItemsQuantity = 0
    CartStatus = ""
    CartCreatedDate = ""
    CartFullfilledDate = ""
  }