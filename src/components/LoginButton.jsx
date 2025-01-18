import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import iconUser from '../assets/images/iconUser.png';

const LoginButton = () => {
    const { user, login } = useContext(AuthContext);
    
    return (
        <button className='rounded-full p-1' style={{ backgroundColor: "#fde3b2", width: "65px" }} onClick={login}>
            {user ? <img src={iconUser} className='w-8 mx-auto' alt='Icon User' /> : <p>Login</p>}
        </button>
    );
};

export default LoginButton;
