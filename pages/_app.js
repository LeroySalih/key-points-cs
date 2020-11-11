

import '../styles/globals.css'
import { Provider } from 'next-auth/client'


import ThemeContext, {MyLightTheme} from '../components/themes';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

const MyThemeLight = {
    backgroundColor: 'white',
    colour: 'black'
}
function MyApp({ Component, pageProps }) {
  
  return <Provider session={pageProps.session}>

            <ThemeContext.Provider value={{theme: MyLightTheme }}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeContext.Provider>
            
        </Provider>
}

export default MyApp
