
export const msalConfig = {

    
    auth: {
        clientId: process.env.REACT_APP_clientID,
        authority: "https://login.microsoftonline.com/27d76b99-0ce0-463e-b4b5-d9cc9e9910a8",
        redirectUri: process.env.REACT_APP_redirectUri
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
};

export const loginRequest = {
    scopes: ["a4f058c9-db98-48ef-960e-f7b19cfcc2da/user_impersonation"]
};
