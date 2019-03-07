/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { Meal, Menu } from '../models';
// import { sequelize } from '../models/index';

/**
 * @class MenuService
 * @description - Describes the Meals behaviour of the app, basic CRUD operations etc and can only be accessed if user have the authorization.
 */
class MenuService {
  /**
   * get today date
   * @static
   * @description - get today date to look like what we have in the database
   *
   * @return{json} all meals available in the database
   */
 
  static todayDate() {
    const date = new Date();
    const month = `${date.getMonth() + 1}`;
    const day = date.getDate();
    const today = `${date.getFullYear()}-${month.padStart(2, '0')}-0${day}`;
    // const today = `${date.getFullYear()}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;    
    // const date = new Date();
    // const month = `${date.getMonth() + 1}`;
    // const day = date.getDate().toString().length < 2 ? "0"+ date.getDate() : date.getDate();
    // const today = `${date.getFullYear()}-${month.padStart(2, '0')}-${day}`;
    return today;
  }

  /**
   * get all menu
   * @static
   * @description - Fetches the menu for a day.
   *
   * @return{json} menu available in the database
   */
  static async getMenu(catererId) {
    try {
      const today = this.todayDate();
      const foundMenu = await Menu.findOne({ where: { createdAt: today } });
      const mealId = foundMenu.dataValues.meals;
      console.log('id', mealId);
      try {
        const foundMenuMeal = await this.getMealById(mealId, catererId);
        console.log('menu', foundMenuMeal);
        return { menu: foundMenuMeal, error: false }; 
      } catch (err) {
        const error = { error: true, error_message: 'error', err };
        throw error;
      }      
    } catch (err) {
      const error = { error: true, error_message: 'could not fetch menu', err };
      throw error;
    }
  }

  /**
   * setupMenu
   * @static
   * @description - Creates a new menu or returns an existing menu for a day in the app.
   * @param{Object} mealId - menu id to be created
   * @param{Object} caterer_id - caterer that owns the menu to be created
   * @return{json} the created menu detail
   */
  static async setupMenu(mealId, catererId) {
    try {
      const today = this.todayDate();
      const menu = await Menu.findAll({ where: { caterer_id: catererId, createdAt: today }, returning: true, plain: true });
      if (menu === null) {
        const createdMenu = await Menu.create({
          caterer_id: catererId,
          meals: [mealId],
        });
        return { createdMenu, err: false, message: 'Menu set successfully' };
      }
      return { menu, err: true, error_message: 'Menu set already' }; 
    } catch (err) {
      const error = { error_message: 'something went wrong', err };
      throw error;
    }
  }
  
  /**
   * get all meal by id
   * @static
   * @description - Fetches the meal for a day.
   * @param{Object} mealId - menu id to be created
   * @param{Object} caterer_id - caterer that owns the menu to be created
   *
   * @return{json} menu available in the database
   */
  static async getMealById(mealId, catererId) {
    try {
      const meals = await Meal.findAll({ where: { caterer_id: catererId } });
      const meal_id = mealId[0].split(',');
      const singleMealId = meal_id.map(id => Number(id));
      const mealer = meals.filter(mealed => singleMealId.includes(mealed.dataValues.id));
      return mealer;
    } catch (err) {
      const error = { errorm: true, error_message: 'something went wrong', err };
      throw error;
    }
    // const result = MealData.meals.filter(meal => mealsId.includes(meal.id));
    // return result;
  }
}

export default MenuService;
