import React from 'react';
import MealCard from './MealCard/MealCard';
import classes from './Order.css';
import OrderTable from './OrderTable/OrderTable';



const meals = [
  { id: 11, name: 'Semo', image: '/../../assets/images/food4.jpg', price: 1000, quantity: 2} ,
  { id: 12, name: 'Coconut Rice', image: '/../../assets/images/food.jpg', price: 700, quantity: 2} ,
  { id: 13, name: 'Moi moi', image: '/../../assets/images/food1.jpg', price: 1500, quantity: 2} ,
  { id: 4, name: 'Chicken and chips', image: '/../../assets/images/food3.jpg', price: 1000, quantity: 2} ,
  { id: 5, name: 'Porridge', image: '/../../assets/images/food4.jpg', price: 700, quantity: 2} ,
  { id: 6, name: 'Jollof Rice', image: '/../../assets/images/food1.jpg', price: 1500, quantity: 2}
]

const order = (props) => (
  <div className={classes.order}>
    <h2>Place your Order</h2>
    <div className={classes.orderBody}>
      <div className={classes.orderCard}>
        {meals.map((meal, index) => (
          <MealCard
            key={meal.name + index} 
            addToCart={() => props.addToCart(meal)} 
            mealImage={meal.image} 
            mealPrice={meal.price} 
            mealName={meal.name} 
          />
        ))}
      </div>   
      <div>
        <OrderTable 
          currentOrder={props.currentOrder}  
          price={props.price} 
          addQuantity={props.addQuantity} 
          reduceQuantity={props.reduceQuantity} 
          removeMeal={props.removeMeal}
        />
      </div>
  </div>
  </div>  
);

export default order;
