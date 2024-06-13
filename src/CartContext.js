import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addShopCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);

            if (productExists) {
                return prevCart.map(item => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }
            return [...prevCart, { ...product, cantidad: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cart , addShopCart }}>
            {children}
        </CartContext.Provider>
    );

};
