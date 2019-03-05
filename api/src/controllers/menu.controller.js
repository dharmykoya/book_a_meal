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
      const foundMenu = await MenuService.getMenu(caterer_id);
      if (foundMenu.err) {
        res.status(401).send({
          status: 'error',
          foundMenu,
        });
      } else {
        res.status(200).send({
          status: 'success',
          foundMenu,
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
      const createdMenu = await MenuService.setupMenu(mealId.meal_id, caterer_id);
      if (createdMenu.err) {
        res.status(401).send({
          status: 'failed',
          createdMenu,
        });
      }
      res.status(201).send({
        status: 'success',
        createdMenu,
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
