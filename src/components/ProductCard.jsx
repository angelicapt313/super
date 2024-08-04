import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {

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
        addShopCart({ ...product, quantityAdded: newQuantity });
    };

    const handleIncreaseQuantity = () => {

        const newQuantity = quantityAdded + 1;
        setQuantityAdded(newQuantity);
        addShopCart({ ...product, quantityAdded: newQuantity });
    };

    const handleDecreaseQuantity = () => {

        const newQuantity = quantityAdded - 1;
        if (newQuantity >= 0)
            setQuantityAdded(newQuantity);
        addShopCart({ ...product, quantityAdded: newQuantity });
    };

    return (

        <div className="card-neo flex flex-col md:flex-row border  rounded m-2">

            <div className="md:w-1/2 ">
                <img src={require(`../assets/images/${product.ProductImageName}`)} alt={product.ProductImageName} className="w-full h-full object-cover object-center rounded" />
            </div>

            <div className="flex flex-col justify-between m-1 p-2 md:w-1/2">
                <div>
                    <p className="text-lg font-bold">{product.ProductName}</p>
                    <p className="text-gray-700">Cantidad: {product.ProductQuantity}</p>
                    {product.ProductDiscount > 0 && (

                    <p className="text-gray-700">Descuento: %{product.ProductDiscount}</p>
                    )}
                </div>


                {/* Agregar */}
                <div className="flex items-center justify-between my-1 border-t-4">

                    <p className=" text-gray-700 font-bold">${product.ProductPrice}</p>

                    {quantityAdded === 0 ? (

                        <button
                            onClick={handleAddToCart}
                            className="btn-add bg-green-500 text-white m-1 px-3 rounded"
                        >
                            +
                        </button>

                    ) : (
                        <div className="btn-add flex items-center ">
                            <button
                                onClick={handleIncreaseQuantity}
                                className="bg-green-400 text-white m-1 px-2  rounded "
                            >
                                +
                            </button>
                            <span className="text-sm">{quantityAdded}</span>
                            <button
                                onClick={handleDecreaseQuantity}
                                className="btn-sub bg-red-400 text-white m-1 px-2 rounded"
                            >
                                -
                            </button>

                            
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};


export default ProductCard;
