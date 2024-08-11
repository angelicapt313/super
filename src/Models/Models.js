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