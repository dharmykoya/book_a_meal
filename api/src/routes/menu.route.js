import { Router } from 'express';
import MenuController from '../controllers/menu.controller';


const router = Router();

router.get('/', MenuController.getMenu);
router.post('/', MenuController.addMenu);
// router.get('/:id', MenuController.getMeal);
// router.delete('/:id', MenuController.deleteMeal);
// router.put('/:id', MenuController.updateMeal);



export default router;
