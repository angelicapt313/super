import React from 'react';
import { Link } from 'react-router-dom';
import file from '../assets/images/file.png'
import '../styles/Home.css'
import Products from './Products';

const Home = () => {
    return (
        <div className="content">
            <div className="flex flex-col items-center md:flex-row md:justify-between p-4 my-3">
                <div className="md:w-1/2 p-4">
                    <h1 className="title text-3xl font-bold mb-4">What you <span>want</span>, when you <span>need it </span>...</h1>
                    <p className="subtitle text-gray-600 mb-4 text-lg">Because your <span>comfort </span>, our priority: <span>fast</span> and <span>reliable</span> home delivery service!</p>
                    <Link to="/products">
                        <button className="products animate-bounce text-white m-3 px-4 py-2 rounded-3xl">Ver Productos</button>
                    </Link>
                </div>
                <div className="md:w-1/2 p-4">
                    <img
                        src={file}
                        alt="Products Supermarket"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>

    );
};

export default Home;