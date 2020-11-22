import { UserAgentApplication } from 'msal';
import config from '../../../../components/config';

/*
const client = new UserAgentApplication({
  auth: {
    clientId: config.appId,
    redirectUri: "https://comp-sci-keypoints.com/api/auth/ms/callback"
  }, 
  cache: { 
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
});
*/

const callback = async (req, res) => {

  

  res.redirect('/');


}

export default callback;