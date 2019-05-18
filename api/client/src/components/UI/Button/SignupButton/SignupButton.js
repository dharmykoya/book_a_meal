import React from 'react';
import classes from './SignupButton.css';


const signupButton = (props) => (
  <button className={classes.Button}>{props.children}</button>
);


export default signupButton;