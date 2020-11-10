import {createContext} from 'react';

const MyLightTheme = {
  bgColor: "#ff00ff",
  color: 'black',
  navbar : {
    font: 'Verdana',
    fontSize: "1.5rem"
  }
}


const ThemeContext = createContext(MyLightTheme);


export default ThemeContext
export {MyLightTheme} ;
// export {myRedTheme, myBlueTheme}
// module.exports = {
//   myRedTheme, myBlueTheme
// }

