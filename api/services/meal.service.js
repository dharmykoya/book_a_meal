// import jwt from 'jsonwebtoken';
// import Helper from './helper';
// import config from '../config/config';
import { Meal } from '../models';

const MealService = {
  // fetchAllMeals() {
  //   return Meal.meals.map((data) => {
  //     const newMeal = new Meal();
  //     newMeal.id = data.id;
  //     newMeal.name = data.name;
  //     newMeal.caterer_id = data.caterer_id;
  //     newMeal.name = data.name;
  //     newMeal.price = data.price;
  //     newMeal.image = data.image;
  //     return newMeal;
  //   });
  // },

  getAll() {
    const meals = this.fetchAllMeals();
    return meals;
  },

  getAllMeals() {
    Meal.findAll({
      where: {
        caterer_id: 4,
      },
    })
      .then(allMeals => allMeals);
  },

  // addMeal(meal) {
  //   const mealLength = mealData.meals.length;
  //   const lastId = mealData.meals[mealLength - 1].id;
  //   const id = lastId + 1;
  //   const newMeal = { id, ...meal };
  //   mealData.meals = [...mealData.meals, newMeal];
  //   return mealData.meals;
  // },
  addMeal(meal) {
    return Meal.create({
      name: meal.name,
      size: meal.size,
      price: meal.price,
      image: meal.image,
      caterer_id: meal.caterer_id,
    })
      .then(createdMeal => new Promise((newMeal, error) => {
        if (createdMeal) {
          newMeal({ createdMeal, err: false, message: 'meal created successfully' });
        } else {
          error(Error({ mes: 'Could not create the meal', err: true }));
        }
      }));
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
