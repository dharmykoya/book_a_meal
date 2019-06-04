/* eslint-disable max-len */
import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import OrderMiddleware from '../middlewares/order.middleware';
import OrderController from '../controllers/order.controller';

const router = Router();

// route for getting all order owned by a particular caterer
router.get('/', authMiddleware.checkToken, OrderMiddleware.getOrders, OrderController.getOrders);

// route for getting all order owned by a particular user
// router.get('/:user_id', authMiddleware.checkToken, OrderMiddleware.getOrders, OrderController.getOrderItems);

// adding a meal to item
router.post('/', 
authMiddleware.checkToken, 
OrderMiddleware.createOrder, 
OrderController.createOrder);

// creating an order
router.post('/checkout', authMiddleware.checkToken, OrderMiddleware.createOrder, OrderController.createOrder);

// route for getting a particular order with the meal id
// router.get('/:id', authMiddleware.checkToken, MealMiddleware.getMeal, MealController.getMeal);

// route for deleting a particular meal with the meal id
// router.delete('/:id', authMiddleware.checkToken, OrderMiddleware.deleteMeal, OrderController.deleteMeal);

// route for updating a meal with the meal id
router.put('/:id', authMiddleware.checkToken, OrderMiddleware.updateOrder, OrderController.updateOrder);

export default router;
