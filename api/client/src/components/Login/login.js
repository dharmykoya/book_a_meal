import React from 'react';
import Form from '../UI/Form/Form';
import FormInput from '../UI/Form/FormItem/FormItem';
import classes from './login.css';
import SingupBtn from '../UI/Button/SignupButton/SignupButton';
import Aux from '../../hoc/Cover/Cover';

const login = () => {
  return (
  <Aux>
    <h3 className={classes.LoginHeader}>Please Login</h3>
    <Form>
      <FormInput type="text" placeholder="email" />
      <FormInput type="text" placeholder="password" />
      <SingupBtn>LOGIN</SingupBtn>
      <p className={classes.Message}>
        Not registered? 
        <a href="signup.html" className={classes.textOrange}>
          Sign Up
        </a>
      </p>
    </Form>
  </Aux>  
  );
};

export default login;
