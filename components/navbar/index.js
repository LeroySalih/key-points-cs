import styled from 'styled-components';
import {useContext} from 'react';
import ThemeContext from '../themes';

import styles from './index.module.css';


import SignInStatus from './signInStatus';

const Navbar = () => {

  const {theme} = useContext(ThemeContext);
  

  return (<div className={"navbar"}>
    <span className="title">Comp-Sci: Key Points</span>
    <SignInStatus></SignInStatus>
    <style jsx>{`
      .navbar {
        display: flex;
        font-family : "${theme.navbar.font}";
        font-size: ${theme.navbar.fontSize};
        
        background-color: ${theme.bgColor};
        color: ${theme.color};
        padding: 10px;
        box-shadow: 0px 10px 10px #aaaaaa;
        margin-bottom: 15px;
      }

      .title {
        flex: 1
      }
    `}
    </style>
  </div>)

} 

export default Navbar;