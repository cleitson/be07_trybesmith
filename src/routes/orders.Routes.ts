import { Router } from 'express';
import ordersController from '../controller/orders.controller';

const ordersRoute = Router();

ordersRoute.get('/', ordersController.allOrders);

export default ordersRoute;