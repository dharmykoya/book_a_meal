import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

// router.get('/', MealController.fetchAllMeals);
router.post('/register', UserController.signup);
// router.post('/login', (req, res) => res.send('login'));
router.post('/login', UserController.login);


export default router;
