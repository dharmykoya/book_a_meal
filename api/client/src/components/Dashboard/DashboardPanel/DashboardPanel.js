import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLock, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './DashboardPanel.css';
import DashboardAction from '../DashboardAction/DashboardAction';



const dashboardPanel = () => (
  <div className={classes.dashboardPanelContainer}>
    <div className={classes.dashboardPanel}>
      <h5>CONTROL PANEL</h5>
      <ul>
        <li><a href="index.html"><FontAwesomeIcon icon={faHome} />update email</a></li>
        <li><a href="index.html"><FontAwesomeIcon icon={faLock} />change password</a></li>
        <li><a href="index.html"><FontAwesomeIcon icon={faTrashAlt} />delete profile</a></li>
      </ul>    
    </div>
    <DashboardAction />
  </div>
  
);


export default dashboardPanel;
