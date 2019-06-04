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
  static async createOrder(req, res) {
    try {
      const { user_id } = req.decoded.user;
      const { meals, caterer_id } = req.body;
      const createdOrder = await OrderService.createOrders(meals, user_id, caterer_id);
      res.status(201).send({
        status: 'success',
        createdOrder,
      });
    } catch (err) {
      res.status(500).send({
        status: 'failed',
        err,
      });
    }
  }

  /**
   * @description - Add a order option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - created meal
   */
  static async addToOrder(req, res) {
    try {
      const { user_id } = req.decoded.user;
      const { meals } = req.body;
      const createdOrder = await OrderService.addToOrder(meals, user_id,);
      res.status(201).send({
        status: 'success',
        createdOrder,
      });
    } catch (err) {
      res.status(500).send({
        status: 'failed',
        err,
      });
    }
  }

  /**
   * @description - get a orders option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - order details
   */
  static async getOrders(req, res) {
    try {
      const { caterer_id } = req.decoded.user;
      const orders = await OrderService.getOrders(caterer_id);
      res.status(200).send({
        status: 'success',
        orders,
      });
    } catch (err) {
      res.status(500).send({
        status: 'failed',
        err,
      });
    }
  }

  /**
   * @description - update a orders option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - order details
   */
  static async updateOrder(req, res) {
    try {
      const { user_id } = req.decoded.user;
      const { action } = req.body;
      const { id } = req.params;
      const updatedOrders = await OrderService.updateOrder(id, user_id, action);

      if (updatedOrders.status === 'not found') {
        res.status(404).send({
          status: 'success',
          data: updatedOrders,
        });
      }
      res.status(202).send({
        status: 'success',
        data: updatedOrders,
      });
    } catch (err) {
      res.status(500).send({
        status: 'failed',
        err,
      });
    }
  }

  // /**
  //  * @description - update a orders option, only a caterer or an admin can perform this action.
  //  * @static
  //  * @param {object} req
  //  * @memberof MealController
  //  * @param {object} res
  //  * @returns {*} - order details
  //  */
  // static async getOrderItems(req, res) {
  //   try {
  //     const { user_id } = req.decoded.user;
  //     const { action } = req.body;
  //     const { id } = req.params;
  //     const updatedOrders = await OrderService.updateOrder(id, user_id, action);
  //     res.status(201).send({
  //       status: 'success',
  //       data: updatedOrders,
  //     });
  //   } catch (err) {
  //     res.status(500).send({
  //       status: 'failed',
  //       err,
  //     });
  //   }
  // }
}

export default OrderController;
