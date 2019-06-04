import React from 'react';
import classes from './CheckoutForm.css';

const checkoutForm = () => (
  <div className={classes.orderHeader}>
    <form className={classes.checkoutForm}>       
        <div className={classes.col50}>
            <h3>Billing Address</h3>
            <div>
                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
            </div>
            <div>
                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="john@example.com" />
            </div>
            <div>
                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
            </div>
        </div>

        <div className={classes.col50}>
            <h3>Payment</h3>
            
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Damilola Adekoya" />
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
    
            <div className={classes.cardDetails}>
                <div className={classes.col50}>
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="november" />
                </div>
                <div className={classes.col50}>
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2028" />
                </div>
                <div className={classes.col50}>
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="647" />
                </div>
            </div>            
        </div>
        <input type="submit" value="PAY" className={classes.checkoutBtn} />
    </form>
</div>
);

export default checkoutForm;



        