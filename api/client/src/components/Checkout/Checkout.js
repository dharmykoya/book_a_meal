import React from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import classes from './Checkout.css'

const checkout = (props) => (
  <div className={classes.checkout}>
    <h2>Checkout</h2>
    <div className={classes.checkoutMain}>
      <CheckoutForm />
      <div>{props.price}</div>
    </div>
  </div>
);

export default checkout;

