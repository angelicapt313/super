import React, { useContext, useEffect } from 'react';
import { CartContext } from '../CartContext';
import {checkOutSession, createTransaction} from './ApiCalls'
import NotificationService from '../services/NotificationService';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import {Transaction} from '../Models/Models';

const Cart = () => {
    
    const { cart, removeFromCart } = useContext(CartContext);

    const grandTotal = cart.reduce((acc, product) => acc + product.Price * product.quantityAdded, 0);
    const checkOutUrl = process.env.REACT_APP_checkOut;

    const { instance, accounts } = useMsal();

    useEffect(() => {
        
        if (accounts.length > 0) {
            instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then(response => {
                
                console.log(response);
              
                
            }).catch(err => {
                
                console.error(err);
                
            });
        }
    }, [accounts, instance]);

    const handleCheckout = async (cart, url, options = {}) =>  {
       
        const token = localStorage.getItem("AccessToken");
        
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials':'true',
            ...options.headers,
        };
        
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        
        var response = await checkOutSession(checkOutUrl, cart, {
            ...options,
            headers,
        }).then(o => {
            
            window.location.href = o;

        });
        
        return response;
        
    }

    if (!cart || cart.length === 0) {
        return <p className='font-bold m-4 text-center'>There are no products in the cart.</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Shopping cart...</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="w-1/12"></th>
                            <th className="w-3/12 px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">Product</th>
                            <th className="w-2/12 px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">Price</th>
                            <th className="w-2/12 px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">QTY</th>
                            <th className="w-2/12 px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => (
                            <tr key={product.ProductID}>
                                <td className="w-1/12"></td>
                                {/* <td className="w-3/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <div className="flex items-center">
                                        <img src={require(`../assets/images/${product.ProductImageName}`)} alt={product.ProductImageName} className="w-16 h-16 object-cover" />
                                        <div className="ml-4">
                                            <p className="text-gray-900 whitespace-no-wrap">{product.ProductName}</p>
                                        </div>
                                    </div>
                                </td> */}
                                <td className="w-2/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">${product.Price}</p>
                                </td>
                                <td className="w-2/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{product.StockQuantity}</p>
                                </td>
                                <td className="w-2/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">${(product.Price * 
                                        product.quantityAdded).toFixed(2)}</p>
                                </td>
                                <td className="w-1/12 w-2/12 px-6 py-4 border-b border-gray-300"><button className='px-2 py-2 bg-red-500/100 rounded-lg' 
                                onClick={() => removeFromCart(product.ProductID)} >X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-right font-bold">Total</td>
                            <td className="px-6 py-4 border-t border-gray-300 text-lg font-bold">${grandTotal.toFixed(2)}</td>
                            <td> <button
                      onClick={() => handleCheckout(cart)}
                      className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700 mr-2"
                    >
                      Checkout
                    </button></td>
                        </tr>
                    </tfoot>
                   
                </table>
            </div>
        </div>
    );

};

export default Cart;
