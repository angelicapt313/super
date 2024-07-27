import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';

const ProductCard = ({product}) => {
    
     const { addShopCart, cart } = useContext(CartContext);

     const [quantityAdded, setQuantityAdded] = useState(0);

    useEffect(() => {
        
        const existingProduct = cart.find(item => item.ProductID === product.ProductID);
        if (existingProduct) {
            setQuantityAdded(existingProduct.quantityAdded);
        }
    }, [cart, product.ProductID]);

    const handleAddToCart = () => {
        
        const newQuantity = quantityAdded + 1;
        setQuantityAdded(newQuantity);
        addShopCart({...product, quantityAdded: newQuantity});
    };

    const handleIncreaseQuantity = () => {
        
        const newQuantity = quantityAdded + 1;
        setQuantityAdded(newQuantity);
        addShopCart({ ...product, quantityAdded: newQuantity });
    };

    const handleDecreaseQuantity = () => {
        
        const newQuantity = quantityAdded - 1;
        if(newQuantity >= 0)
            setQuantityAdded(newQuantity);
        addShopCart({ ...product, quantityAdded: newQuantity });
    };
    
    return (
      
        <div className="border p-4 rounded">    
       
            <h2 className="text-lg font-bold">{product.ProductName}</h2>
            <p className="text-gray-700">Cantidad: {product.ProductQuantity}</p>
            <p className="text-gray-700">Precio: ${product.ProductPrice}</p>
            <p className="text-gray-700">Descuento: %{product.ProductDiscount}</p>
            <img src={require(`../assets/images/${product.ProductImageName}`)} alt={product.ProductImageName} className="w-16 h-16 object-cover" />
            
            <div className="mt-2">
                {quantityAdded === 0 ? (
                    <button
                        onClick={ handleAddToCart}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                        Add
                    </button>
                ) : (
                    <div>
                        <button
                            onClick={handleIncreaseQuantity}
                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        >
                            +
                        </button>
                        <button
                            onClick={handleDecreaseQuantity}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            -
                        </button>
                        <span className="ml-2">{quantityAdded}</span>
                    </div>
                )}
            </div>
        </div>
    );
};


export default ProductCard;
