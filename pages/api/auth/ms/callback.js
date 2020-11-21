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



const callback = async (req, res) => {

  const tokenRequest = {
    code: req.query.code,
    scopes: process.env.OAUTH_SCOPES.split(','),
    redirectUri: process.env.OAUTH_REDIRECT_URI
  };

  try {
    const response = await msalClient.acquireTokenByCode(tokenRequest);

    console.log("Found User HomeAccountId:: ", response.account.homeAccountId);
    console.log("Found User AccessToken:: ", response.accessToken);
    // Save the user's homeAccountId in their session
    // req.session.userId = response.account.homeAccountId;

    // const user = await graph.getUserDetails(response.accessToken);

    // console.log('Access Token', response.accessToken)
    // // Add the user to user storage
    // req.app.locals.users[req.session.userId] = {
    //   displayName: user.displayName,
    //   email: user.mail || user.userPrincipalName,
    //   timeZone: user.mailboxSettings.timeZone
    // };

    // console.log('User Access Token:', user)
    // console.log('')
    // console.log('')
  } catch(error) {

    console.log("Error:", JSON.stringify(error, Object.getOwnPropertyNames(error)))
    // req.flash('error_msg', {
    //   message: 'Error completing authentication',
    //   debug: JSON.stringify(error, Object.getOwnPropertyNames(error))
    // });
  }

  res.redirect('/');


}

export default callback;