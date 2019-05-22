import React from 'react';
import classes from './MealCard.css';

const mealCard = (props) => (
  <div className={classes.mealCard}>
    <img src={props.mealImage} alt="" />
    <p className={classes.price}>&#8358; {props.mealPrice}</p>
    <p>{props.mealName}</p>
    <p><button onClick={props.addToCart}>Add to cart</button></p>
  </div>
);

export default mealCard;

