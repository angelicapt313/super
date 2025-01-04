import React, { useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../authConfig';
import iconUser from '../assets/images/iconUser.png';
import { getUserInfo } from './ApiCalls';


const getUser = async (userID) => {
    
    await getUserInfo(userID)
};

const LoginButton = () => {
    
    const { instance } = useMsal();
    const [user, setUser] = useState("");
    const [store, setStore] = useState("");
    const [token, setToken] = useState("");

    const handleLogin = async() => {
       
        instance.loginPopup(loginRequest)
        .then( r => {
            
            
            setUser(r.account.username);
            setToken(r.accessToken);
           
            setStore(getUser(r.account.username));
            sessionStorage.setItem("UserName", user);
            sessionStorage.setItem("AccessToken", token)
            sessionStorage.setItem("StoreID", store);
            
        })
        
        .catch(e => {
            console.error(e);
        });
    };

    return <button className='rounded-full p-1' style={{ backgroundColor: "#fde3b2", width: "65px" }} 
        onClick={handleLogin}>
       {user !== "" ? <img src={iconUser} className='w-8 mx-auto' alt='Icon User' /> 
       : <p>Login</p> }
    </button>;
};

export default LoginButton;
