import React, { Component } from 'react';
import Aux from '../Cover/Cover';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Home from '../../components/Home/Home';
import NavToggle from '../../components/Navigation/NavToggle/NavToggle';
import Login from '../../components/Login/login';

class Layout extends Component {
  state = {
    showNavToggle: false,
  }
  navToggleHandler = () => {
    this.setState((prevState) => {
      return { showNavToggle: !prevState.showNavToggle }
    })
  }
  navToggleClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }
  render () {
    return (
      <Aux>
        <Toolbar navClicked={this.navToggleHandler} />        
        <NavToggle open={this.state.showNavToggle} 
          closed={this.navToggleClosedHandler} 
        />
        <Home />
        <Login />
      </Aux>
    );
  }
}

export default Layout;