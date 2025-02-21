import { Router } from 'express';
import { getUser } from '../controllers/UsersControllers/GetUser.js';
import { createUser } from '../controllers/UsersControllers/CreateUser.js';
import { deleteUser } from '../controllers/UsersControllers/DeleteUser.js';
import { putUser } from '../controllers/UsersControllers/PutUser.js'

const routes = Router();

routes.post('/api/user', createUser);
routes.get('/api/user', getUser);
routes.put('/api/user/:id', putUser);
routes.delete('/api/user/:id', deleteUser);

export default routes;