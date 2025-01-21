import React, { createContext, useState, useEffect } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../authConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { instance } = useMsal();
    const [user, setUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const login = async () => {
       
try {
    const loginResponse = await instance.loginPopup(loginRequest);
    if (loginResponse) {
        instance.setActiveAccount(loginResponse.account);
        
        setUser(loginResponse.account);
        setRoles(loginResponse.idTokenClaims.roles || []);
    }
} catch (error) {
        if (error.errorCode === 'no_account_error') {
          console.error('No active account found. Please log in.');
          await instance.loginPopup();
          const tokenResponse = await instance.acquireTokenSilent({});
          return tokenResponse.accessToken;
        } else if (error.errorCode === 'user_cancelled') {
          console.error('User cancelled the login flow.');
          alert('Login was cancelled. Please try again.');
          throw error;
        }
}};

    const logout = () => {
        instance.logoutPopup();
        setUser(null);
        setRoles([]);
    };

    useEffect(() => {
        const activeAccount = instance.getActiveAccount();
        if (activeAccount) {
            setUser(activeAccount);
            setRoles(activeAccount.idTokenClaims.roles || []);
        }
    }, [instance]);

    return (
        <AuthContext.Provider value={{ user,roles, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
