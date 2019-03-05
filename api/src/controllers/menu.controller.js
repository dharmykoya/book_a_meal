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
  static async getMenu(req, res) {
    try {
      const { caterer_id } = req.decoded.user;
      const foundMeals = await MenuService.getMenu(caterer_id);
      if (foundMeals.err) {
        res.status(401).send({
          status: 'error',
          message: foundMeals,
        });
      } else {
        res.status(200).send({
          status: 'success',
          meals: foundMeals,
        });
      }
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
  static async setupMenu(req, res) {
    const { caterer_id } = req.decoded.user;
    const mealId = req.body;

    try {
      const createdMeal = await MenuService.setupMenu(mealId.meal_id, caterer_id);
      if (createdMeal.err) {
        const data = createdMeal.error_message;
        res.status(401).send({
          status: 'failed',
          data,
        });
      }
      res.status(201).send({
        status: 'success',
        createdMeal,
      });
    } catch (err) {
      res.status(500).send({
        status: 'failed',
        err,
      });
    }
  }
}

export default MenuController;
