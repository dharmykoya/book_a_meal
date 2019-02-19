import OrderData from '../data/orderData';
import Order from '../models/orders.model';

const OrderService = {
  /*
  This method is used to fetch all the Orders in the order data..
  (i.e...coming from the orderData object)
  */
  fetchAllOrders() {
    return OrderData.orders.map((data) => {
      const newOrder = new Order();
      newOrder.id = data.id;
      newOrder.user_name = data.user_name;
      newOrder.user_id = data.user_id;
      newOrder.meal_order = data.meal_order;
      newOrder.address = data.address;
      newOrder.phone_no = data.phone_no;
      newOrder.total_cost = data.total_cost;
      return newOrder;
    });
  },

  /**
  * This method takes in an order object as the argument,
  * then assigns an id which is an increment of the last id,
  * then spread the order object to the orders array in orderData
  * @param {*} order
  */
  addNewOrder(order) {
    const ordersLength = OrderData.orders.length;
    const lastId = OrderData.orders[ordersLength - 1].id;
    const id = lastId + 1;
    const newOrder = { id, ...order };
    OrderData.orders = [...OrderData.orders, newOrder];
    return newOrder;
  },

  getAllOrders() {
    return this.fetchAllOrders();
  },


  /**
   * This method takes an id and orderList as its arguments
   * and then using the filter method, I get the arrays not being edited
   * then created and object for the updated order
   *
   *
   * @param {*} id: The id of the order to update
   * @param {*} orderList: The new value of the order option after update
   */
  updateOrder(id, orderList) {
    const parsedId = parseInt(id, Number);
    const newOrderData = OrderData.orders.filter(order => order.id !== parsedId);
    const foundId = (OrderData.orders.length !== newOrderData.length);
    const editedOrder = {
      id: parsedId,
      user_name: orderList.user_name,
      user_id: orderList.user_id,
      meals: orderList.meals,
      address: orderList.address,
      phone_no: orderList.phone_no,
      total_cost: orderList.total_cost,
    };
    OrderData.orders = [...newOrderData, editedOrder];
    return {
      editedOrder,
      foundId,
    };
  },
};

export default OrderService;
