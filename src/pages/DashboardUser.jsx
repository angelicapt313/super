import React, { useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import DashboardSideMenu from './DashboardSideMenu';
import Charts from './Charts';

const DashboardUser = () => {
    const { instance, accounts } = useMsal();
    const [userRoles, setUserRoles] = useState(null);

    useEffect(() => {
        
        if (accounts.length > 0) {
            instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then(response => {
                
                localStorage.setItem("token", response.accessToken);
                localStorage.setItem("userRoles", response.idTokenClaims.roles)
                
                setUserRoles(response.idTokenClaims.roles);
                
            }).catch(err => {
               console.log(err);
            });
        }
    }, [accounts, instance]);
    
    if (String(userRoles) !== 'Task.Admin') {
        return (
        <div className="flex min-h-screen">
            <div className="container mx-auto p-4">
            <div>Authorization Required</div>
            </div>
           
        </div>);
    }
    
    return (
        <div className="flex min-h-screen">
          
            <DashboardSideMenu></DashboardSideMenu>

            <div className="container mx-auto p-4">
     
            <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-6">Main Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {<Charts></Charts>}
                {<Charts></Charts>}
                {<Charts></Charts>}
            </div>
              
            </div>
            </div>
        </div>
    );
};

export default DashboardUser;
