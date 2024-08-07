
export const msalConfig = {

    
    auth: {
        clientId: "3b69122c-b10b-4af3-b8ad-5bdf35144df9",
        authority: "https://login.microsoftonline.com/27d76b99-0ce0-463e-b4b5-d9cc9e9910a8",
        redirectUri: process.env.REACT_APP_redirectUri
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

export const loginRequest = {
    scopes: ["3b69122c-b10b-4af3-b8ad-5bdf35144df9/user_impersonation"]
};
