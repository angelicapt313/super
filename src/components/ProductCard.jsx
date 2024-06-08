// src/components/ProductCard.jsx
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const imagePath = require(`../assets/images/${product.image}`);

    return (
        <div className="border p-4 rounded">
            <img src={imagePath} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <div className="mt-2">
                {quantity === 0 ? (
                    <button
                        onClick={() => setQuantity(1)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                        Agregar
                    </button>
                ) : (
                    <div>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        >
                            +
                        </button>
                        <button
                            onClick={() => setQuantity(quantity - 1)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            -
                        </button>
                        <span className="ml-2">{quantity}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
