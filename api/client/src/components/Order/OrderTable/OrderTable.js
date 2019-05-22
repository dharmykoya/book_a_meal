import React from 'react';
import classes from './OrderTable.css';
import TableRow from './TableRow/TableRow';
import Button from '../../UI/Button/SignupButton/SignupButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt, faMinus } from '@fortawesome/free-solid-svg-icons';


const orderTable = (props) => {

  // get the values of the current order
  const orders = Object.values(props.currentOrder);
  
  // mapping through all the meals and creating a table row
  const tr = orders.map((order, index) => {    
    return (
      <tr key={order.name + index} >        
        <TableRow>{order.name}</TableRow>
        <TableRow>&#8358; {order.price}</TableRow>
        <TableRow>
          <FontAwesomeIcon className={classes.icon} icon={faPlus} onClick={() => props.addQuantity(order)} />
          <span className={classes.quantity}>{order.quantity}</span>
          <FontAwesomeIcon className={classes.icon} icon={faMinus} onClick={() => props.reduceQuantity(order)} />
        </TableRow>
        <TableRow>{order.quantity * order.price}</TableRow>
        <TableRow><FontAwesomeIcon icon={faTrashAlt} onClick={() => props.removeMeal(order)} /></TableRow>
      </tr>
    )
  });
  
  return (<div>
    <form>
      <table className={classes.orderTable}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tr}          
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td><a href="confirm-order.html"><Button>Proceed</Button></a></td>
            <td><strong>Total &#8358;{props.price}</strong></td>
          </tr>
        </tfoot>  
      </table>
    </form>
  </div>)
};

export default orderTable;