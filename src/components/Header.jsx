import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar  p-4 text-white">
            <nav className="flex justify-between">
                <h1 className="text-2xl">Super Quick!</h1>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/products">Products</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;