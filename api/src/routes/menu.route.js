import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import MenuMiddleware from '../middlewares/menu.middleware';
import MenuController from '../controllers/menu.controller';


const router = Router();

router.get('/', authMiddleware.checkToken, MenuMiddleware.getMenu, MenuController.getMenu);
router.post('/', authMiddleware.checkToken, MenuMiddleware.setupMenu, MenuController.setupMenu);

export default router;
