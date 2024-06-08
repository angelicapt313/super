import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/images/home.jpg'
import '../styles/Home.css'
import Products from './Products';

const Home = () => {
    return (
        <div className='mx-auto content grid grid-cols-1 md:grid-cols-2 auto-rows-fr'>
            <div className='content-image'>
                <img src={home} alt="Tienda" className=' w-full h-full sm:w-full' />
            </div>

            <div className="content-text flex flex-col items-center justify-center">
                <h1 className=" title text-xl md:text-3xl text-center p-4">Your comfort, our priority: fast and reliable home delivery service.</h1>
                <Link to="/products">
                <button className="products animate-bounce text-white m-3 px-4 py-2 rounded-3xl">Ver Productos</button>
            </Link>
            </div>


        </div>


        // <div class="bg-red-500 sm:bg-yellow-400 md:bg-green-400 lg:bg-purple-400 xl:bg-blue-400 py-2 px-4 text-center">Resize window</div>


    );
};

export default Home;