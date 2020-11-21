import config from '../config';

import { UserAgentApplication } from 'msal';
import { getUserDetails} from '../graph';
import { BehaviorSubject } from 'rxjs';
import AuthContext from './AuthContext';
class Auth {
  constructor () {

    this.token = null;
    this.user = null;
    this.currentUser = new BehaviorSubject(null);

    //this.isAuthenticated = false;

    // initialise msal
    this.userAgentApplication = new UserAgentApplication({
      auth: {
        clientId: config.appId,
        redirectUri: "http://localhost:3000"
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    });

    // attempt to load the token from msal.
    this.token = this.userAgentApplication.getAccount();

    if (this.token) {
      this.getUserProfile();
    }
  }

  isAuthenticated = () => this.token !== null;

  async getUserProfile(){
    try {
      var accessToken = await this.userAgentApplication.acquireTokenSilent({
        scopes: config.scopes
      });

      if (accessToken) {
        //console.log("[getUserProfile]::accessToken Found!", accessToken)
        var user = await getUserDetails(accessToken);
        
        // broadcast the new user details
        //console.log("[getUserProfile]::broadcasting user!", user)
        this.currentUser.next({
          uid: user.id,
          displayName: user.displayName,
          email: user.mail || user.userPrincipalName
        });
        
      } 
    } catch(err)
    {
      this.currentUser.next(null);
      console.log(err.message);
    }
  }

  login = async () => {
    try {
      await this.userAgentApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account"
      });
      await this.getUserProfile();
    }
    catch(err) {
      //var errParts = err.split("|");
      this.setState({
        isAuthenticated: false,
        user: {},
        error: {message: err.message, debug: ''}
      })
    }
  }

  logout = async () => {
    this.userAgentApplication.logout();
    this.currentUser.next(null);
  }


}




export default (process.browser) ? new Auth() : Auth;
export {AuthContext}