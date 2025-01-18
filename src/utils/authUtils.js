import { msalInstance } from '../authConfig';

export const getToken = async () => {
  try {
    await msalInstance.initialize();

    if (!msalInstance.getActiveAccount()) {
      await msalInstance.loginPopup();
    }

    const token = await msalInstance.acquireTokenSilent({}).then((response) => {
      return response.accessToken;
    }).catch(async (error) => {
      if (error.errorCode === 'no_account_error') {
        console.error('No active account found. Please log in.');
        await msalInstance.loginPopup();
        const tokenResponse = await msalInstance.acquireTokenSilent({});
        return tokenResponse.accessToken;
      } else if (error.errorCode === 'user_cancelled') {
        console.error('User cancelled the login flow.');
        alert('Login was cancelled. Please try again.');
        throw error;
      }
    });

    return token;
  } catch (error) {
    console.error('Error acquiring token', error);
    throw error;
  }
};