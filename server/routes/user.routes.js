import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

router.route('/user/auth').post(UserController.authUser);

export default router;
