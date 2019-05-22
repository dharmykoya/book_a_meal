import React from 'react';
import OrderTable from '../Order/OrderTable/OrderTable';
import classes from './ConfirmOrder.css'

const confirmOrder = (props) => (
  <div className={classes.confirmOrder}>
    <h2>Confirm your Order</h2>
    <OrderTable 
      currentOrder={props.currentOrder}  
      price={props.price} 
      addQuantity={props.addQuantity} 
      reduceQuantity={props.reduceQuantity} 
      removeMeal={props.removeMeal}
    />
  </div>
);

export default confirmOrder;