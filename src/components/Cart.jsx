import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Shopping cart...</h1>
            {cart.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {cart.map(product => (
                        <div key={product.id} className="flex items-center justify-between p-4 border rounded">
                            <img src={require(`./assets/images/${product.image}`).default} alt={product.name} className="w-16 h-16 object-cover" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg">{product.name}</h2>
                                <p className="text-gray-600">${product.price}</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg">{product.cantidad}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
