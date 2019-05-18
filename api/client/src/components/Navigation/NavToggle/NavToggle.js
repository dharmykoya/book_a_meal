import React from 'react';
import RightNavigationItems from '../NavigationItems/RightNavigationItems/RightNavigationItems';
import classes from './NavToggle.css';

const navToggle = (props) => {
  let attachedClasses = [classes.NavToggle, classes.Close]
  if (props.open) {
    attachedClasses = [classes.NavToggle, classes.Open]
  }
  return  (
    <nav className={attachedClasses.join(' ')}>
      <RightNavigationItems />
    </nav>
  )
};

export default navToggle;