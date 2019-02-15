import Meal from '../models/Meals';
import mealData from '../data/mealData';

const MealService = {
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
  },

  getMeal(id) {
    const parseId = parseInt(id, Number);
    const singleMeal = mealData.meals.find((meal) => meal.id === parseId);
  },


  test(message) {
    return 'Damilola';
  }

}


export default MealService;