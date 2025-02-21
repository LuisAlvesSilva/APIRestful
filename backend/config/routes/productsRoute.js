import { Router } from 'express';
import { getProducts } from '../controllers/ProductsControllers/GetProducts.js'
import { createProducts } from '../controllers/ProductsControllers/CreateProducts.js'
import { putProducts } from '../controllers/ProductsControllers/PutProducts.js'

const routes = Router();

routes.get('/api/products', getProducts);
routes.get('/api/products/:id', getProducts);
routes.post('/api/products', createProducts);
routes.put('/api/products/:id', putProducts);

export default routes;