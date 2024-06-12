import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const shopCartProvider = ({ children }) => {

    const [shopCart, setShopCart] = useState([]);

    const addShopCart = (product) => {
        setShopCart((prevShopCart) => {
            const productExists = prevShopCart.find (item => item.id === product.id);

            if(productExists) {
                return prevShopCart.map(item => item.id === product.id ? {...item, cantidad: item.cantidad + 1 } : item
                );
            }
            return [...prevShopCart, {...product, cantidad: 1 }];
        });
};

const result = {
    shopCart,
    addShopCart,
};


return(
    <CartContext.Provider value={result}>
        {children}
    </CartContext.Provider>
);

};
