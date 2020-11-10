

import '../styles/globals.css'
import { Provider } from 'next-auth/client'


import ThemeContext, {MyLightTheme} from '../components/themes';

const MyThemeLight = {
    backgroundColor: 'white',
    colour: 'black'
}
function MyApp({ Component, pageProps }) {
  
  return <Provider session={pageProps.session}>
            <ThemeContext.Provider value={{theme: MyLightTheme }}>
              <Component {...pageProps} />
            </ThemeContext.Provider>
            
        </Provider>
}

export default MyApp
