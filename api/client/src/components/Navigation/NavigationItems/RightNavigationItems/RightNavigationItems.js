import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './RightNavigationItems.css';

const rightNavigationItems = () => (
  <div className={classes.NavRight}>
    <ul>
      <NavigationItem link="/login">Signin</NavigationItem>
      <NavigationItem link="/signup">Signup</NavigationItem>
      <NavigationItem link="/caterer">Caterer</NavigationItem>
      <NavigationItem link="/dashboard">Dashboard</NavigationItem>
    </ul>
  </div>
);

export default rightNavigationItems;