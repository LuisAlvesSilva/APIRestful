import { Router } from 'express';
import { getOrders } from '../controllers/OrdersControllers/GetProducts.js'
import { createOrders } from '../controllers/OrdersControllers/CreateProducts.js'

const routes = Router();

routes.post('/api/orders', /* criar controller */);
routes.get('/api/orders/:id', /* criar controller */);
routes.get('/api/orders/user/:id', /* criar controller */);

export default routes;
