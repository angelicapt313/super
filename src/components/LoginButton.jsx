import React, { useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../authConfig';
import iconUser from '../assets/images/iconUser.png';
import { getUserInfo } from './ApiCalls';


const LoginButton = () => {
    
    const { instance } = useMsal();
    const [user, setUser] = useState("");
    const handleLogin = async() => {
        
        // First async function call
        const loginResponse = await instance.loginPopup(loginRequest);
        
        // Check if login was successful
        if (loginResponse) {
            var userInfo;
            sessionStorage.setItem("token", loginResponse.accessToken);

          // Second async function call that depends on the result of the first
          await getUserInfo(loginResponse.account.username).then((response) => {
              response.body.getReader().read().then((data) => {
                var decoder = new TextDecoder();
                var string = decoder.decode(data.value);
                userInfo = JSON.parse(string);
                setUser(userInfo.Username);
                sessionStorage.setItem("user", userInfo.Username);
                sessionStorage.setItem("store", userInfo.StoreID);
                
             });
          });
          
          
        }
    };

    return <button className='rounded-full p-1' style={{ backgroundColor: "#fde3b2", width: "65px" }} 
        onClick={handleLogin}>
       {user !== "" ? <img src={iconUser} className='w-8 mx-auto' alt='Icon User' /> 
       : <p>Login</p> }
    </button>;
};

export default LoginButton;
