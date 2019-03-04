import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

// route for signup, it leads the request to the signup method in the usercontroller class
router.post('/signup', UserController.signup);

// route for login
router.post('/login', UserController.login);


export default router;
