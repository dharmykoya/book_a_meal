import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.Navitem}>
    <a href={props.link}>{props.children}</a>
  </li>  
);
export default navigationItem;