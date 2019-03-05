/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { Order } from '../models';

/**
 * @class OrderService
 * @description - Describes the Meals behaviour of the app, basic CRUD operations etc and can only be accessed if user have the authorization.
 */
class OrderService {
  /**
   * add a new meal
   * @static
   * @description - Creates a new meal in the app.
   * @param{Object} orders - meal to be created
   * @param{Object} userId - user that created the order.
   * @param{Object} caterer_id - caterer that owns the meal to be created
   * @return{json} the created meal detail
   */
  static async addOrder(orders, userId, catererId) {
    try {
      const foundOrders = await Order.findAll({
        where: { caterer_id: catererId, user_id: userId },
      });
      if (foundOrders.length > 0) {
        const response = { message: 'You have placed an order today check if it has not been confirmed so you can edit', foundOrders };
        throw response;
      }     

      const orderCreated = await orders.map((order) => {
        Order.create({
          ...order,
          caterer_id: catererId,
          user_id: userId,
        });
      }, { returning: true, plain: true });      
      if (!orderCreated) {
        const error = { error_message: 'Cannot create order', orderCreated, err: true };
        throw error;
      }
      return { order: orderCreated, err: false };
    } catch (err) {
      const error = { error_message: 'something went wrong', err };
      throw error;
    }
  }
}

export default OrderService;
