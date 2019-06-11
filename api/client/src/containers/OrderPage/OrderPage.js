import React, { Component} from 'react';
import Order from '../../components/Order/Order';
import ConfirmOrder from '../../components/ConfirmOrder/ConfirmOrder';
// import MealCard from './MealCard/MealCard';
// import classes from './Order.css';
// import OrderTable from './OrderTable/OrderTable';


class OrderPage extends Component {
  state = {
    showNavToggle: false,
    orders: [
      { id: 1, name: 'Amala', image: 'heello', price: 1000, quantity: 2, subTotal: this.calculateSubTotal(2, 1000) },
      { id: 2, name: 'Spaghetti', image: 'heello', price: 700, quantity: 2, subTotal: this.calculateSubTotal(2, 700) },
      { id: 3, name: 'Fried Rice', image: 'heello', price: 1500, quantity: 2, subTotal: this.calculateSubTotal(1, 1500) },
    ],
    totalPrice: 6400,
    removeItem: false,
  }

  calculateSubTotal (quantity, price) {
    return quantity * price;
  }
  navToggleHandler = () => {
    this.setState((prevState) => {
      return { showNavToggle: !prevState.showNavToggle }
    })
  }
  
  navToggleClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  removeMealHandler = (meal) => {
    const oldOrders = Object.values(this.state.orders);
    const updatedOrders = oldOrders.filter(order => order.id !== meal.id);

    // getting the total sum of orders
    const updatedTotalPrice = updatedOrders.map((order) => {
      return (order.quantity * order.price)
    }).reduce ((sum, currVal) => {
      return sum + currVal;
    }, 0);

    
    this.setState ({
      orders: updatedOrders,
      totalPrice: updatedTotalPrice,
    });    
  }

  addToQuantity = (meal) => {
    // Get the current state and loop through to reduce the quantityt
    const oldOrder = Object.values(this.state.orders);
    oldOrder.map((order) => {
      if (order.id === meal.id) {
        order.quantity += 1;
      }
    });

    // getting the total sum of orders
    const updatedTotalPrice = oldOrder.map((order) => {
      return (order.quantity * order.price)
    }).reduce ((sum, currVal) => {
      return sum + currVal;
    }, 0);
    
    // update the state
    this.setState({
      orders: oldOrder,
      totalPrice: updatedTotalPrice,
    });
  }

  reduceQuantity = (meal) => {
    // Get the current state and loop through to reduce the quantityt
    const oldOrder = Object.values(this.state.orders);
    oldOrder.forEach((order) => {
      if (order.id === meal.id) {
        order.quantity -= 1;
        if (order.quantity < 1) {
          this.removeMealHandler(order);
        }
      }
    });

    // getting the total sum of orders
    const updatedTotalPrice = oldOrder.map((order) => {
      return (order.quantity * order.price)
    }).reduce ((sum, currVal) => {
      return sum + currVal;
    }, 0);
    
    // update the state
    this.setState({
      totalPrice: updatedTotalPrice,
    });

    
  }

  addFoodCartHandler = (meal) => {
    // getting the old orders
    const oldOrder = this.state.orders;

    // making the new order state
    const updateOrder = [
      ...oldOrder, meal,
    ];

    // getting the total sum of orders
    const updatedTotalPrice = Object.values(updateOrder).map((order) => {
      return (order.quantity * order.price)
    }).reduce ((sum, currVal) => {
      return sum + currVal;
    }, 0);
    
    // update the state
    this.setState({
      orders: updateOrder,
      totalPrice: updatedTotalPrice,
    });
  }

  render() {
    let order;
    if (this.props.match.path === '/confirm-order') {
      order = (
        <ConfirmOrder 
          addToCart={this.addFoodCartHandler} 
          currentOrder={this.state.orders} 
          price={this.state.totalPrice}
          addQuantity={this.addToQuantity}
          reduceQuantity={this.reduceQuantity}
          removeMeal={this.removeMealHandler}
        />
      );
    } else {
      order = (
        <Order 
          addToCart={this.addFoodCartHandler} 
          currentOrder={this.state.orders} 
          price={this.state.totalPrice}
          addQuantity={this.addToQuantity}
          reduceQuantity={this.reduceQuantity}
          removeMeal={this.removeMealHandler}
        />
      );
    }
    return (
      <div>   
        {order}
      </div>
    )
  }
}

export default OrderPage;
