/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import OrderService from '../services/order.service';


/**
 *
 *
 * @class OrderController
 * @description - handles the request coming from the route and interacts with the mealService class.
 */
class OrderController {
   /**
   * @description - Add a order option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - created meal
   */
  static async addOrder(req, res) {
    const { user_id, caterer_id } = req.decoded.user;
    const { orders } = req.body;
    try {
      const createdMeal = await OrderService.addOrder(orders, user_id, caterer_id);
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

export default OrderController;
