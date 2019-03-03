import { Router } from 'express';
import MealController from '../controllers/meal.controller';

const router = Router();

// route for getting all meals
router.get('/', MealController.fetchAllMeals);

// route for creating a new meal
router.post('/', MealController.addMeal);

// route for getting a particular meal with the meal id
router.get('/:id', MealController.getMeals);

// route for deleting a particular meal with the meal id
router.delete('/:id', MealController.deleteMeal);

// route for updating a meal with the meal id
router.put('/:id', MealController.updateMeal);


export default router;
