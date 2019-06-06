import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.Navitem}>
    <NavLink to={props.link} exact>{props.children}</NavLink>
  </li>  
);
export default navigationItem;