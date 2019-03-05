/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { Meal, Menu, sequelize } from '../models';
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
    return today;
  }

  /**
   * get all menu
   * @static
   * @description - Fetches the menu for a day.
   *
   * @return{json} menu available in the database
   */
  static getMenu() {
    return Meal.findAll({})
      .then((foundMeals) => {
        if (!foundMeals) {
          return { message: 'No meals in the system.', err: true };
        }
        if (foundMeals.length === 0) {
          return { message: 'You have bot created any meal.', err: false };
        }
        const allMeals = { meals: foundMeals, message: 'All the meals available.', err: false };
        return allMeals;
      });
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
}

export default MenuService;
