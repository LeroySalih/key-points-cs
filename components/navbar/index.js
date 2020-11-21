import styled from 'styled-components';
import {useContext} from 'react';
import ThemeContext from '../themes';

import styles from './index.module.css';

import Image from 'next/image';

import SignInStatus from './signInStatus';

import Auth, {AuthContext} from '../../components/auth';

const Navbar = () => {

  const {theme} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);
  

  return (<div className={"navbar"}>
    <div className="title">
    <Image src="/images/site-logo.png" 
      width={290} 
      height={44} alt="Site Logo"/>
    </div>
    
    <SignInStatus user={user}></SignInStatus>
    
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