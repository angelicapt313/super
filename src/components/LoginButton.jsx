import React from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../authConfig'

const LoginButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    };

    return <button className='rounded-full p-2' style={{backgroundColor:"#fde3b2", width:"90px"}} onClick={handleLogin}>Login</button>;
};

export default LoginButton;
