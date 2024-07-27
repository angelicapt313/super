import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
    
    const { cart, removeFromCart } = useContext(CartContext);

    const totalGeneral = cart.reduce((acc, product) => acc + product.ProductPrice * product.ProductQuantity, 0);

    if (!cart || cart.length === 0) {
        return <p>No hay productos en el carrito.</p>;
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
                                <td className="w-3/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <div className="flex items-center">
                                        <img src={require(`../assets/images/${product.ProductImageName}`)} alt={product.ProductImageName} className="w-16 h-16 object-cover" />
                                        <div className="ml-4">
                                            <p className="text-gray-900 whitespace-no-wrap">{product.ProductName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-2/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">${product.ProductPrice}</p>
                                </td>
                                <td className="w-2/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{product.ProductQuantity}</p>
                                </td>
                                <td className="w-2/12 px-6 py-4 border-b border-gray-300 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">${(product.ProductPrice * product.ProductQuantity).toFixed(2)}</p>
                                </td>
                                <td className="w-1/12 w-2/12 px-6 py-4 border-b border-gray-300"><button className='px-2 py-2 bg-red-500/100 rounded-lg' onClick={() => removeFromCart(product.ProductID)} >X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-right font-bold">Total General</td>
                            <td className="px-6 py-4 border-t border-gray-300 text-lg font-bold">${totalGeneral.toFixed(2)}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

};

export default Cart;
