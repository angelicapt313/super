import React from 'react';
import { Link } from 'react-router-dom';
import file from '../assets/images/file.png'
import '../styles/Home.css'
import Products from './Products';
import LoginButton from '../components/LoginButton'

const Home = () => {
    return (
        <div className="content h-screen flex justify-center items-center">
            <div className="info-content flex flex-col lg:flex-row justify-center items-center ">

                <div className="content text-center md:w-50 mt-4">
                   <LoginButton />
                    <h1 className="title text-3xl font-bold mb-4">What you <span>want</span>, when you <span>need it </span>...</h1>
                    <p className="subtitle text-gray-600 mb-4 text-lg">Because your <span>comfort </span>, our priority: <span>fast</span> and <span>reliable</span> home delivery service!</p>
                    <Link to="/products">
                        <button className="products animate-bounce text-white m-3 px-4 py-2 rounded-3xl">Ver Productos</button>
                    </Link>
                </div>

                <div className="image-content w-96 md:w-50">
                    <img
                        src={file}
                        alt="Products Supermarket"
                        className="w-full"
                    />
                </div>

            </div>
        </div>

    );
};

export default Home;