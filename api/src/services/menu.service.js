/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { Meal, Menu } from '../models';
// import meal from '../models/meal';
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
        attributes: ['meals'],
        where: { createdAt: today },
        raw: true,
      });
      if (foundMenu.length > 0) {
        const menuMeal = await this.getMealById(foundMenu);
        response = { menuMeal };
        return response;
      }
      response = { messgae: 'No menu has been set for today'};
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
  // static getMealById(menus) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       console.log('menus', menus);
  //       let response = {};
  //       const meals_id = [];
  //       menus.map((menu) => {
  //         meals_id.push(menu.meals);
  //       });
  //       let food = {};
  //       let food_item = [];
  //       const foodList = [];
  //       if (Array.isArray(meals_id) && meals_id.length > 0) {
  //         meals_id.forEach((e) => {
  //           if (Array.isArray(e) && e.length > 0) {
  //             e.forEach((id) => {
  //               Meal.findAll({
  //                 where: { id },
  //                 raw: true,
  //               }).then((foundItem) => {
  //                 food_item.push(foundItem);
  //                 // console.log('found item at second loop: ', foundItem);
  //                 console.log('food_item at second loop: ', food_item);
  //                 resolve(food_item);
  //               });
  //             });
  //             console.log('food_item: final after first loop: ', food_item);
  //           }
  //          /*  } else {
  //             const foundItem = await Meal.findOne({
  //               where: { id: e },
  //               raw: true,
  //             });
  //             food_item.push(foundItem);
  //             // console.log('found item at first loop: ', foundItem);
  //             console.log('food_item at first loop: ', food_item);
  //           } */
  //           console.log('food_item: final after second loop:', food_item);
  //         });
  //         console.log('food_item: final', food_item);
  //       } else {
  //         console.log('no meals found');
  //         resolve('no meals found');
  //       }
  //       /* meals_id.map((meal_id) => {
  //         meal_id.map(async (id) => {
  //           const foundItem = await Meal.findOne({
  //             where: { id },
  //             raw: true,
  //           });
  //           food_item.push(foundItem);
  //         });
  //         foodList.push(food_item);


  //         console.log('foodList', foodList);
  //       }); */

  //       food = { ...foodList };
  //       response = { food };
  //       resolve(response);

  //       // meals_id.map((meal_id) => {
  //       //   const foodList = [];
  //       //   meal_id.map((id) => {
  //       //     const food_item = [];
  //       //     Meal.findOne({
  //       //       where: { id },
  //       //       raw: true,
  //       //     }).then((foundItem) => {
  //       //       food_item.push(foundItem);
  //       //     }).catch(e => e);

  //       //     // console.log(foodItem);
  //       //     // console.log('foood found', food);
  //       //     // food = { ...foodItem };
  //       //     foodList.push(food_item);
  //       //   });
  //       //   food.push(foodList);
  //       // });
  //       // console.log(food);
  //     } catch (err) {
  //       const response = { error: true, error_message: 'something went wrong', err };
  //       // throw response;
  //       reject(response);
  //     }
  //   });
  // }

  static async getMealById(menus) {
    try {
      const big = [];
      const mealsDb = await Meal.findAll({
        attributes: ['id', 'name', 'price', 'image'],
        raw: true,
      });
      menus.map(async (menu) => {
        const small = await mealsDb.filter(mealId => menu.meals.indexOf(mealId.id) > -1);
        big.push(small);
      });
      return big;

    } catch (err) {
      const response = { error: true, error_message: 'something went wrong', err };
      throw response;
    }
  }
}

export default MenuService;
