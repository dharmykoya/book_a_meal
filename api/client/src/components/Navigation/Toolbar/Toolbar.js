import React from 'react';
import Logo from '../../Logo/Logo';
import RightNavigationItems from '../NavigationItems/RightNavigationItems/RightNavigationItems';
// import LeftNavigationItems from '../NavigationItems/LeftNavigationItems/LeftNavigationItems';
import Hamburger from '../NavToggle/Hamburger/Hamburger';
import classes from './Toolbar.css';


const toolbar = (props) => (
  <div className={classes.headerContainer}>
    <header className={classes.Header}>
      <Logo />      
      <div>
        <RightNavigationItems />
      </div> 
      <Hamburger navClicked={props.navClicked}/>
    </header>
  </div>  
);

export default toolbar;