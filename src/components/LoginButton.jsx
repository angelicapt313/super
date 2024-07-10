import React from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../authConfig';
import iconUser from '../assets/images/iconUser.png';

const LoginButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    };

    return <button className='rounded-full p-1' style={{ backgroundColor: "#fde3b2", width: "65px" }} onClick={handleLogin}>
        <img src={iconUser} className='w-8 mx-auto' alt='Icon User' />
    </button>;
};

export default LoginButton;
