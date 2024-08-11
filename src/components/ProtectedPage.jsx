import React, { useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

const ProtectedPage = () => {
    const { instance, accounts } = useMsal();
  
    const [userRoles, setUserRoles] = useState(null);

    useEffect(() => {
        
        if (accounts.length > 0) {
            instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then(response => {
                
                setUserRoles(response.idTokenClaims.roles);
                
            }).catch(err => {
                
                console.error(err);
                
            });
        }
    }, [accounts, instance]);

    if (userRoles !== "Task.Admin") {
        return <div>Loading...</div>;
    }

    return "Proected View";
};

export default ProtectedPage;
