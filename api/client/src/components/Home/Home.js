import React from 'react';
import classes from './home.css';
import Bg from '../../assets/images/bg1.png';
import Form from '../UI/Form/Form';
import SingupBtn from '../UI/Button/SignupButton/SignupButton';


const home = () => (
  <main>
    <div className={classes.headerContainer}>
      <div className={classes.WelcomeImage}>
        <img src={Bg} alt="hungry?" />
      </div>
      <div className={classes.formContainer}>
        <Form> 
          <p>
            By creating an account you agree to our  
            <a href="/" className={classes.textOrange}>
              Terms & Privacy
            </a>.
          </p>
          <SingupBtn>Sign Up</SingupBtn>
          <p className={classes.Message}>
            Already registered? 
            <a href="login.html" className={classes.textOrange}>
              Sign In
            </a>
          </p>
        </Form>        
      </div>
    </div>
  </main>
);

export default home;
