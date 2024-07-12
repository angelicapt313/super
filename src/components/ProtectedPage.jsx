import React, { useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

const ProtectedPage = () => {
    const { instance, accounts } = useMsal();
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (accounts.length > 0) {
            instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then(response => {
                debugger
                localStorage.setItem("token", response.accessToken);
                setToken(response.accessToken);
                
            }).catch(err => {
                debugger
                console.error(err);
                instance.acquireTokenPopup(loginRequest).then(response => {
                    localStorage.setItem("token", response.accessToken);
                    setToken(response.accessToken);
                }).catch(err => {
                    console.error(err);
                });
            });
        }
    }, [accounts, instance]);

    if (!token) {
        return <div>Loading...</div>;
    }

    // Realiza llamadas a la API protegida usando el token de acceso
    return <div>Protected Content</div>;
};

export default ProtectedPage;
