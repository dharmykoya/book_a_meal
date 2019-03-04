/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { Meal } from '../models';

/**
 * @class MealService
 * @description - Describes the Meals behaviour of the app, basic CRUD operations etc and can only be accessed if user have the authorization.
 */
class MealService {
  /**
   * get all meals
   * @static
   * @description - Fetches all the meals, only the super admin can have access to this endpoint.
   *
   * @return{json} all meals available in the database
   */
  // static fetchAllMeals() {
  //   return Meal.findAll({})
  //     .then((foundMeals) => {
  //       if (!foundMeals) {
  //         return { message: 'No meals in the system.', err: true };
  //       }
  //       if (foundMeals.length === 0) {
  //         return { message: 'You have bot created any meal.', err: false };
  //       }
  //       const allMeals = { meals: foundMeals, message: 'All the meals available.', err: false };
  //       return allMeals;
  //     });
  // }

  /**
   * get meals by caterer id
   * @static
   * @description - Fetches all the meals for a particular user, only the caterer who created the meal can get their meals.
   * @param{Object} caterer_id - id of the caterer that owns the meal.
   * @return{json} all meals available in the database
   */
  static async fetchAllMealsByCaterer(caterer_id) {
    try {
      const foundMeals = await Meal.findAll({
        where: { caterer_id },
      });
      if (!foundMeals) {
        return { err: true, error_message: 'could not fetch meals' };
      }
      return { meal: foundMeals, err: false };       
    } catch (err) {
      const error = { error_message: 'something went wrong', err };
      throw error;
    }
  }

  /**
   * add a new meal
   * @static
   * @description - Creates a new meal in the app.
   * @param{Object} meal - meal to be created
   * @param{Object} caterer_id - caterer that owns the meal to be created
   * @return{json} the created meal detail
   */
  static async addMeal(meal, catererId) {
    try {
      // console.log('id', catererId);
      // console.log('meal', ...meal);
      const createdMeal = await Meal.create({
        caterer_id: catererId,
        ...meal,
      });
      if (!createdMeal) {
        return { err: true, error_message: 'could not create meal' };
      }
      return { meal: createdMeal, err: false };       
    } catch (err) {
      const error = { error_message: 'something went wrong', err };
      throw error;
    }
  }

  /**
   * update a meal
   * @static
   * @description - updates an existing meal given its id in the app.
   * @param{Object} id - id of the meal option to be updated
   * @param{Object} caterer_id - caterer id of the meal option to be updated
   * @param{Object} meal - the meal option to be updated
   * @return{json} - the details of the updated meal option
   */
  static async updateMeal(id, catererId, meal) {
    try {
      const updateMeal = await Meal.update(
        meal,
        { where: { id, caterer_id: catererId }, returning: true, plain: true },
      );
      if (!updateMeal) {        
        return { err: true, error_message: 'update failed'};
      }
      return { meal: updateMeal, err: false };
    } catch (err) {     
      const error = { error_message: 'something went wrong', err };
      throw error;
    }
  }

  /**
   * remove a meal
   * @static
   * @description - removes a meal option given its id in the app.
   * @param{Object} id - id ff the meal option to be removed
   * @param{Object} caterer_id - caterer_id of the meal option to be removed
   * @return{json} - A success message
   */
  static async deleteMeal(id, catererId) {
    try {
      const destroyedMeal = await Meal.destroy({ where: { id, caterer_id: catererId } });
      if (!destroyedMeal) {        
        return { err: true, error_message: 'delete failed' };
      }
      return { message: 'Meal deleted', err: false };
    } catch (err) {
      const error = { error_message: 'something went wrong', err };
      throw error;
    }
  }   
}

export default MealService;
