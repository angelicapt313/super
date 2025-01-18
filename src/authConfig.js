import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: process.env.REACT_APP_clientID,
        authority: process.env.REACT_APP_authority,
        redirectUri: process.env.REACT_APP_redirectUri
    }
};

const loginRequest = {
    scopes: [process.env.REACT_APP_scope]
};

const msalInstance = new PublicClientApplication(msalConfig);

export { msalConfig, loginRequest, msalInstance };
