import React, { useContext } from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import imgCart from '../assets/images/imgCart.svg';


const Header = () => {

    const { cart } = useContext(CartContext);

    // if (!cart) {
    //     return null; // Añadir esta línea para manejar el caso donde el carrito aún no está definido
    // }

    const totalProductos = cart.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <header className="navbar  p-4 text-white">
            <nav className="flex justify-between">
                <h1 className="text-2xl">Super Quick!</h1>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/products">Products</Link>

                </div>
                <Link to="/cart">
                    <img src={imgCart} alt="Carrito de compras" className="w-10 h-10" />
                </Link>

                {totalProductos > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
                        {totalProductos}
                    </span>
                )}

            </nav>
        </header>
    );
}

export default Header;