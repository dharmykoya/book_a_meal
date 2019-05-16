import React from 'react';
import classes from './Hamburger.css';


const navToggle = (props) => (
  <div className={classes.Hamburger} onClick={props.navClicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default navToggle;