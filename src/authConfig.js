export const msalConfig = {
    auth: {
        clientId: "01433f18-87f9-44a2-8772-ca2fc9316a40",
        authority: "https://login.microsoftonline.com/27d76b99-0ce0-463e-b4b5-d9cc9e9910a8",
        redirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};
