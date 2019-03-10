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
    // const date = new Date();
    // const month = `${date.getMonth() + 1}`;
    // const day = date.getDate();
    // const today = `${date.getFullYear()}-${month.padStart(2, '0')}-0${day}`;
    // const today = `${date.getFullYear()}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const date = new Date();
    const month = `${date.getMonth() + 1}`;
    const day = date.getDate().toString().length < 2 ? '0' + date.getDate() : date.getDate();
    const today = `${date.getFullYear()}-${month.padStart(2, '0')}-${day}`;
    return today;
  }

  /**
   * get all menu
   * @static
   * @description - Fetches the menu for a day.
   *
   * @return{json} menu available in the database
   */
  static async getCatererMenu(catererId) {
    try {
      let response = {};
      const today = this.todayDate();
      const foundMenu = await Menu.findOne({
        where: { caterer_id: catererId, createdAt: today },
      }).catch((e) => {
        response = { err: e, message: 'this caterer has no menu set' };
        throw response;
      });
      console.log(foundMenu);
      const mealId = foundMenu.dataValues.meals;
      const foundMenuMeal = await this.getMealById(mealId, catererId);
      response = { menu: foundMenuMeal, error: false };
      return response;
    } catch (err) {
      const error = { error: true, error_message: 'could not fetch menu', err };
      throw error;
    }
  }

  /**
   * get all menu
   * @static
   * @description - Fetches the menu for a day.
   *
   * @return{json} menu available in the database
   */
  static async getMenu() {
    try {
      let response = {};
      const today = this.todayDate();
      const foundMenu = await Menu.findAll({
        where: { createdAt: today },
      });
      console.log('meals id', foundMenu.meals);

      await this.getMealById(foundMenu.meals);
        
      response = { menu: foundMenu, error: false };
      return response;
      
      // .catch((e) => {
      //   response = { err: e.message, message: 'this caterer has no menu set' };
      //   throw response;
      // });
      // console.log(foundMenus);
      // const mealId = foundMenus.dataValues.meals;
      // const foundMenuMeal = await this.getMealById(mealId);
      // response = { menu: foundMenuMeal, error: false };
      return response;
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
      const menu = await Menu.findAll({
        where: { caterer_id: catererId, createdAt: today },
        returning: true,
        plain: true,
      }).catch((e) => {
        const response = { err: e.message };
        throw response;
      });
      if (!menu) {
        const createdMenu = await Menu.create({
          caterer_id: catererId,
          meals: mealId,
        }).catch((e) => {
          const response = { err: e.message };
          throw response;
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
      let response = {};
      let meals;
      console.log('mealids', mealId)
      // const today = new Date();
      if (!catererId) {
        console.log('dami');
        await Meal.findAll()
          .then((meal) => {
            // console.log(meal);
          // // const meal_id = mealId[0].split(',');
          const singleMealId = meal.map(id => Number(id.id));
          // console.log('meal_id', singleMealId);
          response = meal.filter(mealed => singleMealId.includes(mealed.dataValues.id));
          console.log('dddddd', response.dataValues);
          return response;
          }).catch((e) => {
            response = { err: e.message };
            throw response;
          });
      } else {
        console.log('doyin');
        meals = await Meal.findAll({
          where: { caterer_id: catererId },
        }).catch((e) => {
          response = { err: e.message };
          throw response;
        });
      }      
      if (meals.length === 0) {
        response = { error: true, error_message: 'no meal found for this caterer' };
        throw response;
      }
      // const meal_id = mealId[0].split(',');
      const singleMealId = mealId.map(id => Number(id));
      response = meals.filter(mealed => singleMealId.includes(mealed.dataValues.id));
      return response;
    } catch (err) {
      const response = { error: true, error_message: 'something went wrong', err };
      throw response;
    }
  }
}

export default MenuService;
