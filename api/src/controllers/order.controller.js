import OrderService from '../services/order.service';

const OrderController = {
  fetchOrders(req, res) {
    const allOrders = OrderService.getAllOrders();
    return res.status(200).json({
      status: 'success',
      data: allOrders,
    });
  },

  addOrder(req, res) {
    /*
      Expect json of format
      {
        'user_name: 'customer_name'
        'user_id: 'customer_id'
        'meals: '[]'
        'address: 'address'
        'phone_no: 'phone_no'
        'total_cost: 'total_cost'
      }
    */
    const newOrder = req.body;
    const addedOrder = OrderService.addNewOrder(newOrder);
    return res.status(201).json({
      status: 'success',
      data: addedOrder,
    });
  },

  updateOrder(req, res) {
    /*
      Expect json of format
      {
        'user_name: 'customer_name'
        'user_id: 'customer_id'
        'meals: '[]'
        'address: 'address'
        'phone_no: 'phone_no'
        'total_cost: 'total_cost'
      }
    */
    const { id } = req.params;
    const entry = req.body;
    const result = OrderService.updateOrder(id, entry);
    let response = {};
    let status = 0;
    if (result.foundId) {
      response = {
        ...response,
        status: 'success',
        message: `Order with id: ${id} edited successfully.`,
        data: result.editedOrder,
      };
      status = 202;
    } else {
      response = {
        ...response,
        status: 'error',
        message: `Order with id: ${id} not found.`,
      };
      status = 204;
    }
    return res.status(status).json({
      response,
    });
  },
};

export default OrderController;