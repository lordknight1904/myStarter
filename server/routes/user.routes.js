import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

router.route('/user/auth').get(UserController.authUser);

export default router;
