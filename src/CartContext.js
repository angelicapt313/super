import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    debugger
    const [cart, setCart] = useState([]);

    const addShopCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.ProductID === product.ProductID);

            if (productExists) {
                if (product.cantidad > 0) {
                    return prevCart.map(item => item.ProductID === product.ProductID ? { ...item, cantidad: product.ProductQuantity } : item
                    );
                } else {
                    return prevCart.filter(item => item.ProductID !== product.ProductID);
                }

            }
            return [...prevCart, product,];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.ProductID !== productId));
    }

    return (
        <CartContext.Provider value={{ cart, addShopCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );

};
