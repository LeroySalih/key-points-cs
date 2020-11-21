

import '../styles/globals.css'
import { Provider } from 'next-auth/client'

import {useState, useEffect} from 'react';
import ThemeContext, {MyLightTheme} from '../components/themes';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

import Auth, {AuthContext} from '../components/auth';

const MyThemeLight = {
    backgroundColor: 'white',
    colour: 'black'
}
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentUser.subscribe((user) => {
      // console.log("New User Detected", user);
      setUser(user);
    })
  }, [])
    

  return (
    <AuthContext.Provider value={{user}}>
      <ThemeContext.Provider value={{theme: MyLightTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )

            
            
        
}

export default MyApp
