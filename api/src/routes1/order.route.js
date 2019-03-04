import { Router } from 'express';
import OrderController from '../controllers1/order.controller';

const router = Router();
router.get('/', OrderController.fetchOrders);
router.post('/', OrderController.addOrder);
router.put('/:id', OrderController.updateOrder);

export default router;
