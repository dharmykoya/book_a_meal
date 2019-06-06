import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/Dashboard';
import SelectCaterer from './components/SelectCaterer/SelectCaterer';
import OrderPage from './containers/OrderPage/OrderPage';
import Checkout from './components/Checkonpm ut/Checkout';


class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/vendor" component={SelectCaterer} />
            <Route path="/place-order" component={OrderPage} />
            <Route path="/confirm-order" component={OrderPage} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
