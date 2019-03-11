/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import MenuService from '../services/menu.service';


/**
 *
 *
 * @class MenuController
 * @description - handles the request coming from the route and interacts with the MenuService class.
 */
class MenuController {
  /**
   * @description - Add a menu option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - created meal
   */
  static async getCatererMenu(req, res) {
    try {
      const { catererId } = req.params;
      if (!catererId) {
        const response = 'please select a caterer to check their menu';
        throw response;
      }
      const foundMenu = await MenuService.getCatererMenu(catererId);
      res.status(200).send({
        status: 'success',
        foundMenu,
      });
    } catch (err) {
      const errMessage = 'try again please';
      res.status(500).send({ errMessage, err });
    }
  }

  /**
   * @description - Add a menu option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - created meal
   */
  static async getMenu(req, res) {
    try {
      const foundMenu = await MenuService.getMenu();
      res.status(200).send({
        status: 'success',
        foundMenu,
      });
    } catch (err) {
      const errMessage = 'try again please';
      res.status(404).send({ errMessage, err });
    }
  }

  /**
   * @description - Add a menu option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - created meal
   */
  static async setupMenu(req, res) {
    const { caterer_id } = req.decoded.user;
    const mealId = req.body;
    try {
      if (!mealId) {
        const response = 'please select a meal';
        throw response;
      }
      const createdMenu = await MenuService.setupMenu(mealId.meal_id, caterer_id);
      res.status(201).send({
        status: 'success',
        createdMenu,
      });
    } catch (err) {
      res.status(404).send({
        status: 'failed',
        err,
      });
    }
  }
}

export default MenuController;
