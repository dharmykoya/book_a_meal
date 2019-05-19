import React from 'react';
import classes from './DashboardInfo.css';
import DashboardImage from './DashboardImage/DashboardImage';
import DailySummary from './DailySummary/DailySummary';

const dashboardInfo = (props) => (
  <div className={classes.dashboardHeader}>
    <DashboardImage />
    <div>
      <h4>{props.userName}</h4>
    </div>
    <DailySummary />
  </div>
);

export default dashboardInfo;