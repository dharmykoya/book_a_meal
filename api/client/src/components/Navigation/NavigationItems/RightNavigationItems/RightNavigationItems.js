import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './RightNavigationItems.css';

const rightNavigationItems = () => (
  <div className={classes.NavRight}>
    <ul>
      <NavigationItem>Signin</NavigationItem>
      <NavigationItem>Signup</NavigationItem>
      <NavigationItem>Caterer</NavigationItem>
    </ul>
  </div>
);

export default rightNavigationItems;