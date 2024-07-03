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

    return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
