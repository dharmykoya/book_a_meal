import React, { Component } from 'react';
import './dashboard.css';
import Aux from '../../hoc/Cover/Cover';
import DashboardInfo from './DashboardInfo/DashboardInfo';
import DashboardPanel from './DashboardPanel/DashboardPanel';

class Dashboard extends Component {
  render () {
    return (
      <Aux>
        <DashboardInfo userName="Damilola Adekoya"/>
        <DashboardPanel />
      </Aux>
    )
  }
}

export default Dashboard;



