import Meal from '../models/Meals';
import mealData from '../data/mealData';

const mealService = {
  fetchAllMeals() {
    return mealData.meals.map((data) => {
      const meal = new Meal();
      meal.id = data.id;
      meal.user_id = data.user_id;
      meal.name = data.name;
      meal.price = data.price;
      meal.image = data.image;
      return meal;
    });
  },

  getAll() {
    const meals = this.fetchAllMeals();
    return meals;
  },

  addMeal(meal) {
    const mealLength = mealData.meals.length;
    const lastId = mealData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    const newMeal = { newId, ...meal};
    mealData.meals = [...mealData.meals, newMeal];
    return newMeal;
  }
}

export default class MealsService {
  fetchAllMeals() {
    //Data from the database
    
    
    
    //When we retrieve the data,
    //simulation
    return this.meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      meal.currency = data.currency;
      return meal;
    });
  }


  getAll() {
    //This will be a call to our ORM
    //and manipulations to make data presentable
    const data =  this.fetchAllMeals();
    return data;
  }

  // get(id) {
  //   //because we have our data in an array which starts at 0
  //   return this.fetchAllMeals()[id - 1];
  // }

  get(id) {
    //because we have our data in an array which starts at 0
    if(this.fetchAllMeals()[id - 1]) {
      return this.fetchAllMeals()[id - 1];
    } else{
      return null;
    }
    
  }

  // addMeal(meal) {
  //   const mealLength = this.meals.length;
  //   const lastId = this.meals[mealLength - 1].id;
  //   const id = lastId + 1;
  //   const newMeal = {id, ...meal};
  //   this.meals = [...this.meals, newMeal];
  //   // return this.meals.push(meal);
  //   return newMeal;
  // }

  addMeal(meal) {
    let meals = this.fetchAllMeals();
    const mealLength = this.fetchAllMeals().length;
    const lastId = meals[mealLength - 1].id;
    const id = lastId + 1;
    const newMeal = {id, ...meal};
    meals = [...meals, newMeal];
    // return this.meals.push(meal);
    return meals;
  }

  test(message) {
    return 'Damilola';
  }
}