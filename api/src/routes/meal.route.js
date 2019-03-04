import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import MealMiddleware from '../middlewares/meal.middleware';
import MealController from '../controllers/meal.controller';

const router = Router();

// route for getting all meals created by a particular caterer
router.get('/', authMiddleware.checkToken, MealMiddleware.getMeals, MealController.fetchAllMealsByCaterer);

// route for creating a new meal
router.post('/', authMiddleware.checkToken, MealMiddleware.createMeal, MealController.addMeal);

// route for getting a particular meal with the meal id
// router.get('/:id', authMiddleware.checkToken, MealMiddleware.getMeal, MealController.getMeal);

// route for deleting a particular meal with the meal id
router.delete('/:id', authMiddleware.checkToken, MealMiddleware.deleteMeal, MealController.deleteMeal);

// route for updating a meal with the meal id
router.put('/:id', authMiddleware.checkToken, MealMiddleware.updateMeal, MealController.updateMeal);

export default router;
