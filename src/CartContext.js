import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addShopCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);

            if (productExists) {
                if (product.cantidad > 0) {
                    return prevCart.map(item => item.id === product.id ? { ...item, cantidad: product.cantidad } : item
                    );
                } else {
                    return prevCart.filter(item => item.id !== product.id);
                }

            }
            return [...prevCart, product,];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addShopCart }}>
            {children}
        </CartContext.Provider>
    );

};
