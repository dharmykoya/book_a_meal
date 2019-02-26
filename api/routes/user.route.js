import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

// router.get('/', MealController.fetchAllMeals);
router.post('/', UserController.signup);
// router.post('/api/auth/signin');


export default router;
