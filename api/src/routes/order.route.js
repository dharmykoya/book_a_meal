import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import OrderMiddleware from '../middlewares/order.middleware';
import OrderController from '../controllers/order.controller';

const router = Router();

// route for getting all meals created by a particular caterer
// router.get('/', authMiddleware.checkToken, OrderMiddleware.getMenu, OrderController.fetchAllMealsByCaterer);

// route for creating a new meal
router.post('/', authMiddleware.checkToken, OrderMiddleware.createOrder, OrderController.addOrder);

// route for getting a particular meal with the meal id
// router.get('/:id', authMiddleware.checkToken, MealMiddleware.getMeal, MealController.getMeal);

// route for deleting a particular meal with the meal id
// router.delete('/:id', authMiddleware.checkToken, OrderMiddleware.deleteMeal, OrderController.deleteMeal);

// route for updating a meal with the meal id
// router.put('/:id', authMiddleware.checkToken, OrderMiddleware.updateMenu, OrderController.updateMeal);

export default router;
