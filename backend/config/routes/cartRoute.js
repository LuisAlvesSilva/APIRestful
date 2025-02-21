import { Router } from 'express';
import { getProducts } from '../controllers/CartControllers/GetCart.js'
import { createProducts } from '../controllers/CartControllers/CreateCart.js'
import { putProducts } from '../controllers/CartControllers/PutCart.js'

const routes = Router();

routes.get('/api/cart', /* criar controller */);
routes.post('/api/cart', /* criar controller */);
routes.delete('/api/cart/:id', /* criar controller */);

export default routes;