export const msalConfig = {
    auth: {
        clientId: "ce92bf64-d887-4da5-8f3e-2a26df8264c0",
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
