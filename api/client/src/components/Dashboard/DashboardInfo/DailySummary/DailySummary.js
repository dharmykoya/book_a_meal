import React from 'react';
import classes from './DailySummary.css'

const dailySummary = () => (
  <ul className={classes.dailySummary}>
    <li className="list-inline-item list-small">0<br /><small>total Orders</small></li>
    <li className="list-inline-item list-small">0<br /><small>today's Orders</small></li>
    <li className="list-inline-item list-small">0<br /><small>total balance</small></li>
  </ul>
);

export default dailySummary;
