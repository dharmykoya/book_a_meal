import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import MealController from '../controllers/meal.controller';

const router = Router();

// route for getting all meals
// router.get('/', authMiddleware.checkToken, MealController.fetchAllMeals);

// route for creating a new meal
router.post('/', authMiddleware.checkToken, MealController.addMeal);

// route for getting a particular meal with the meal id
router.get('/:id', authMiddleware.checkToken, MealController.getMeals);

// route for deleting a particular meal with the meal id
router.delete('/:id', authMiddleware.checkToken, MealController.deleteMeal);

// route for updating a meal with the meal id
router.put('/:id', authMiddleware.checkToken, MealController.updateMeal);

export default router;
