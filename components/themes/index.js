import {createContext} from 'react';

const MyLightTheme = {
  bgColor: "rgb(66, 74, 177)",
  color: 'white',
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

