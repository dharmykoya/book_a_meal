import mealData from '../data1/mealData';
import Meal from '../models1/meals.model';

const MealService = {
  fetchAllMeals() {
    return mealData.meals.map((data) => {
      const newMeal = new Meal();
      newMeal.id = data.id;
      newMeal.user_id = data.user_id;
      newMeal.name = data.name;
      newMeal.price = data.price;
      newMeal.image = data.image;
      return newMeal;
    });
  },

  getAll() {
    const meals = this.fetchAllMeals();
    return meals;
  },

  addMeal(meal) {
    const mealLength = mealData.meals.length;
    const lastId = mealData.meals[mealLength - 1].id;
    const id = lastId + 1;
    const newMeal = { id, ...meal };
    mealData.meals = [...mealData.meals, newMeal];
    return mealData.meals;
  },

  getMeal(id) {
    const parseId = parseInt(id, Number);
    const singleMeal = mealData.meals.find(meal => meal.id === parseId);
    return singleMeal || {};
  },

  updateMeal(id, mealList) {
    const parseId = parseInt(id, Number);
    const newMealData = mealData.meals.filter(meal => meal.id !== parseId);
    const foundId = (mealData.meals.length !== newMealData.length);

    const editedMeal = {
      id: parseId,
      user_id: mealList.user_id,
      name: mealList.name,
      price: mealList.price,
      image: mealList.image,
    };

    mealData.meals = [...newMealData, editedMeal];
    return {
      editedMeal,
      foundId,
    };
  },

  deleteMeal(id) {
    const parseId = parseInt(id, Number);
    const newMealData = mealData.meals.filter(meal => meal.id !== parseId);
    const foundId = (mealData.meals.length !== newMealData.length);

    mealData.meals = newMealData;
    return foundId;
  },

};


export default MealService;
