import { Router } from 'express';
import loginMiddleware from '../middleware/login.middleware';
import loginController from '../controller/login.controller';

const loginRouter = Router();

loginRouter.post('/', loginMiddleware.authLogin, loginController.login);

export default loginRouter;