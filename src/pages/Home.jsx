import React from 'react';
import { Link } from 'react-router-dom';
import file from '../assets/images/file.png'
import '../styles/Home.css'
import Products from './Products';
import iconUser from '../assets/images/iconUser.png';

const Home = () => {
    return (
        <div className="content h-screen flex justify-center items-center">
            <div className="info-content flex flex-col lg:flex-row justify-center items-center ">

                <div className="content text-center">

                    <h1 className="title text-2xl font-bold mb-4">What you <span>want</span>, when you <span>need it </span>...</h1>
                    <p className="subtitle text-gray-600 mb-4 text-mg">Because your <span>comfort </span>, our priority: <span>fast</span> and <span>reliable</span> home delivery service!</p>
                    <Link to="/products">
                        <button className="products animate-bounce text-white m-3 px-4 py-2 rounded-3xl">Ver Productos</button>
                    </Link>
                </div>

                <div className="image-content">
                    <img
                        src={file}
                        alt="Products Supermarket"
                        className="w-96 lg:w-100"
                    />
                </div>

            </div>
        </div>

    );
};

export default Home;