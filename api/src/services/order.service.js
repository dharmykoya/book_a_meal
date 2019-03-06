/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { Order, Item, Meal } from '../models';

/**
 * @class OrderService
 * @description - Describes the Meals behaviour of the app, basic CRUD operations etc and can only be accessed if user have the authorization.
 */
class OrderService {
  /**
   * add a new order
   * @static
   * @description - Creates a new meal in the app.
   * @param{Object} orders - meal to be created
   * @param{Object} userId - user that created the order.
   * @param{Object} caterer_id - caterer that owns the meal to be created
   * @return{json} the created menu detail
   */
  static async addToOrder(mealId, userId, quantity) {
    try {
      // console.log(mealId, userId, quantity);
      let response;
      const orderItem = await Item.findOne({ where: { meal_id: mealId, user_id: userId } });
      console.log(orderItem);
      if (orderItem) {
        console.log('failed');
        response = {
          err: true,
          status: 'existing',
          message: 'Order exist Already',
          orderItem,
        };
        return response;
      } 
      if (orderItem === null) {
        console.log('success');
        const newOrderItem = await Item.create({
          meal_id: mealId,
          quantity,
          user_id: userId,
        }, { raw: true });
        response = {
          status: 'success',
          message: 'Order Added',
          newOrderItem,
        };
        return response;
      }
    } catch (error) {
      const response = { error_message: 'something went wrong', err: true, erro: error.message };
      throw response;
    }
  }

  /**
   * add a new meal
   * @static
   * @description - Creates a new meal in the app.
   * @param{Object} orders - meal to be created
   * @param{Object} userId - user that created the order.
   * @param{Object} caterer_id - caterer that owns the meal to be created
   * @return{json} the created menu detail
   */
  static async getOrders(catererId) {
    try {
      const orders = await Order.findAll({ where: { caterer_id: catererId }, raw: true });
      // console.log(orders);
      const response = {
        status: 'success',
        message: 'Orders found',
        orders,
      };
      return response;
    } catch (err) {
      const response = { error_message: 'something went wrong', error: err.message };
      throw response;
    }
  }

  /**
   * get order item
   * @static
   * @description - Updates a new order in the app.
   * @param{Object} orders - meal to be created
   * @param{Object} userId - user that created the order.
   * @param{Object} caterer_id - caterer that owns the meal to be created
   * @return{json} the created menu detail
   */
  static async getOrderItems(userId) {
    try {
      const orderItems = await Item.findAll({
        where: { user_id: userId },
        include: [Meal],
      });
      if (!orderItems) {
        throw new Error('User Has No Order Items');
      }
      const meals = [];
      let total = 0;
      orderItems.forEach((orderItem) => {
        const orderMeal = { ...orderItem };
        orderMeal.meal.quantity = orderItem.quantity;
        meals.push(orderMeal.meal);
        total += orderItem.quantity * orderMeal.meal.price;
      });
      const order = { meals, total };
      const response = {
        status: 'success',
        message: 'Orders Retrieved',
        data: order,
      };
      return response;
    } catch (err) {
      const response = {
        status: 'error',
        message: err.message,
      };
      return response;
    }
  }
  /**
   * update an order
   * @static
   * @description - Updates a new order in the app.
   * @param{Object} orders - meal to be created
   * @param{Object} userId - user that created the order.
   * @param{Object} caterer_id - caterer that owns the meal to be created
   *
   */ 

  static async updateOrder(orderId, userId, action) {
    try {
      const orderItem = await Item.findOne({
        where: { id: orderId, user_id: userId },
        include: [Meal],
        raw: true,
      });
      if (action === 'increase') {
        orderItem.quantity += 1;        
        await Item.update({ quantity: orderItem.quantity }, { where: { id: orderItem.id } });
      } else if (action === 'decrease') {
        orderItem.quantity -= 1;
        if (orderItem.quantity === 0) {
          await Item.destroy({ where: { id: orderItem.id } });
        } else {
          await Item.update({ quantity: orderItem.quantity }, { where: { id: orderItem.id } });
        }
      } else if (action === 'delete') {
        await Item.destroy({ where: { id: orderItem.id } });
      }
      const response = {
        status: 'success',
        message: 'Order Updated',
      };
      return response;
    } catch (err) {
      const response = {
        status: 'error',
        message: err.message,
      };
      return response;
    }
  }

  /**
   * update a new order
   * @static
   * @description - Updates a new order in the app.
   * @param{Object} orders - meal to be created
   * @param{Object} userId - user that created the order.
   * @param{Object} caterer_id - caterer that owns the meal to be created
   * @return{json} the created menu detail
   */
  static async createOrders(meals, userId, catererId, orderTotal) {
    try {
      const createdOrder = await Order.create({
        order: JSON.stringify(meals),
        total: orderTotal,
        caterer_id: catererId,
        user_id: userId,
        delivery_status: 0,
      });
      const response = {
        status: 'success',
        message: 'order created',
        data: createdOrder,
      };
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default OrderService;