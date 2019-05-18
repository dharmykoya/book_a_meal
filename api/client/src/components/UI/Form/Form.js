import React from 'react';
import FormInput from './FormItem/FormItem';
import classes from './Form.css';


const form = (props) => (
  <form className={classes.Form}>
    <FormInput type="text" placeholder="name" />
    <FormInput type="text" placeholder="email" />
    <FormInput type="password" placeholder="password" />
    <FormInput type="password" placeholder="confirm password" />
    {props.children}
  </form>
);


export default form;