/*

This file will get the access token from MS

[ToDo!]
we need to store that access token in a session and
pass it to the client

*/

const msal = require('@azure/msal-node');

const msalConfig = {
  auth: {
    clientId: process.env.OAUTH_APP_ID,
    authority: process.env.OAUTH_AUTHORITY,
    clientSecret: process.env.OAUTH_APP_SECRET
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    }
  }
};

var msalClient = new msal.ConfidentialClientApplication(msalConfig);

const signin = async (req, res) => {
  
  console.log("[auth/signin]::Starting");

  const urlParameters = {
    scopes: process.env.OAUTH_SCOPES.split(','),
    redirectUri: process.env.OAUTH_REDIRECT_URI
  };

  try {
    const authUrl = await msalClient.getAuthCodeUrl(urlParameters);
    res.redirect(authUrl);
  }
  catch (error) {
    console.log(`Error: ${error}`);
    req.flash('error_msg', {
      message: 'Error getting auth URL',
      debug: JSON.stringify(error, Object.getOwnPropertyNames(error))
    });
    res.redirect('/');
  }





}


export default signin;