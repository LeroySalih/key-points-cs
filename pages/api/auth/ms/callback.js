import { UserAgentApplication } from 'msal';

const client = new UserAgentApplication({
  auth: {
    clientId: config.appId,
    redirectUri: "https://key-points-cs-aehbt9fkg.vercel.app/api/auth/ms/callback"
  }, 
  cache: { 
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
});

const callback = async (req, res) => {

  

  res.redirect('/');


}

export default callback;