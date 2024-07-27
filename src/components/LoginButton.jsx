import React, { createContext, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../authConfig';
import iconUser from '../assets/images/iconUser.png';

const LoginButton = () => {
    
    const { instance } = useMsal();
    const [user, setUser] = useState("");

    const handleLogin = () => {
        instance.loginPopup(loginRequest)
        .then(r => {
            debugger

            localStorage.setItem("AccessToken", r.accessToken)
            localStorage.setItem("User", r.name);
            setUser(localStorage.getItem("User"));
        })
        .catch(e => {
            console.error(e);
        });
    };

    return <button className='rounded-full p-1' style={{ backgroundColor: "#fde3b2", width: "65px" }} 
        onClick={handleLogin}>
       {user != "" ? <img src={iconUser} className='w-8 mx-auto' alt='Icon User' /> 
       : <p>Login</p> }
    </button>;
};

export default LoginButton;
