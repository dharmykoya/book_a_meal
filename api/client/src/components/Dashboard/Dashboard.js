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
// class Dashboard extends Component {
//   render () {
//     return (
//       <main>

//         <div className="dashboard-header">
//           <div className="dashboard-header-item-1">
//               <div className="rounded-circle">
//                   <img className="profilepic" src="images/avatar2.png" />
//               </div>
//           </div>

//           <div className="dashboard-header-item-2">
//               <h4>DHARMYKOYA</h4>
//           </div>


//           <ul className="dashboard-header-item-3">
//               <li className="list-inline-item list-small">0<br /><small>total Orders</small></li>
//               <li className="list-inline-item list-small">0<br /><small>today's Orders</small></li>
//               <li className="list-inline-item list-small">0<br /><small>total balance</small></li>
//           </ul>
//         </div>

//         <div className="dashboard-main">
//           <div className="dashboard-main-item-1">
//             <h5>CONTROL PANEL</h5>
//             <ul className="list-inline-item">
//                 <li className="list-inline-item"><a href="index.html"><i className="fa fa-envelope"></i>update email</a></li>
//                 <li className="list-inline-item"><a href="index.html"><i className="fa fa-lock"></i>change password</a></li>
//                 <li className="list-inline-item"><a href="index.html"><i className="fa fa-trash-alt"></i>delete profile</a></li>
//             </ul>
//           </div>
//           <div className="dashboard-main-item-2" >
//               <h5>ACTIONS</h5>

//               <ul className="list-inline">
//                   <li><a className="button" href="index.html">Place Order</a></li>
//                   <li><a className="button" href="index.html">Manage Meals</a></li>
//                   <li><a className="button" href="index.html">Set today's menu</a></li>
//                   <li><a className="button" href="index.html">Transactions Summary</a></li>
//               </ul>
//           </div>
//         </div>
//       </main>
//     )
//   }
// }

export default Dashboard;



