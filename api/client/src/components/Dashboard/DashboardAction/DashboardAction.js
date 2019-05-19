import React from 'react';
import Button from '../../UI/Button/SignupButton/SignupButton';
import classes from './DashboardAction.css';

const dashboardAction = () => (
  <div className={classes.dashboardAction}>
    <h5>ACTION</h5>
    <div className={classes.dashboardActionBtn}>
      <Button>Place Order</Button>
      <Button>Manage meal</Button>
      <Button>Set Menu</Button>
    </div>    
  </div>
);

export default dashboardAction;