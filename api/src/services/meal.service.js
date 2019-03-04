/* eslint-disable max-len */
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
  static fetchAllMeals() {
    return Meal.findAll({})
      .then((foundMeals) => {
        if (!foundMeals) {
          return { message: 'No meals in the system.', err: true };
        }
        const allMeals = { meals: foundMeals, message: 'All the meals available.', err: false };
        return allMeals;
      });
  }

  /**
   * get meals by caterer id
   * @static
   * @description - Fetches all the meals for a particular user, only the caterer who created the meal can get their meals.
   * @param{Object} caterer_id - id of the caterer that owns the meal.
   * @return{json} all meals available in the database
   */
  static getMeals(catererId, callback) {
    return Meal.findAll({
      where: {
        caterer_id: catererId,
      },
    })
      .then((foundMeals) => {
        if (!foundMeals) {
          return callback({ message: 'No meals in the system for this particular caterer.', err: true });
        }
        const allMeals = { meals: foundMeals, message: 'meals returned successfully.', err: false };
        return callback(allMeals);
      });
  }

  /**
   * add a new meal
   * @static
   * @description - Creates a new meal in the app.
   * @param{Object} meal - meal to be created
   * @param{Object} caterer_id - caterer that owns the meal to be created
   * @return{json} the created meal detail
   */
  static addMeal(meal, catererId) {
    return Meal.create({
      caterer_id: catererId,
      ...meal,
    })
      .then((createdMeal, error) => {
        if (!createdMeal) {
          return { err: true, error_message: error };
        }
        return { meal: createdMeal, err: false };
      });
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
  static updateMeal(id, catererId, meal) {
    return Meal.update(
      ...meal,
      { where: { id, caterer_id: catererId } },
    )
      .then((updatedMeal) => {
        if (!updatedMeal) {
          return { err: true };
        }
        return { meal: updatedMeal, err: false };
      });
  }

  /**
   * remove a meal
   * @static
   * @description - removes a meal option given its id in the app.
   * @param{Object} id - id ff the meal option to be removed
   * @param{Object} caterer_id - caterer_id of the meal option to be removed
   * @return{json} - A success message
   */
  static deleteMeal(id, catererId) {
    return Meal.destroy({ where: { id, caterer_id: catererId } })
      .then((destroyedMeal) => {
        if (!destroyedMeal) {
          return { err: true };
        }
        return { message: 'Meal deleted successfully', err: false };
      });
  }
}

export default MealService;
