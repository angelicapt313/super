export class Transaction {
    TransactionID = "";
    UserID = "";
    StoreID = "";
    OrderID = "";
        
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
    StocktQuantity = "";
    IsDeleted = "";
    UpdatedAt = "";
    CreatedAt = "";
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