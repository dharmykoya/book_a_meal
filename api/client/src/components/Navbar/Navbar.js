import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a class="icon" onclick="navToggle()">
            <i class="fa fa-bars"></i>
        </a>
        <div class="right">
            <a href="login.html">Signin</a>
            <a href="signup.html">Signup</a>
            <a href="signup.html">Caterer</a>
        </div>
    </div>
    )    
  }
}

export default Navbar;