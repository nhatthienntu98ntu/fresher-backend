import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares';
import userModel from '../../models/user.model';
import { UserController } from '../controllers';
import { generateToken } from '../../utils/generateToken';
import { Use } from '../../validations';

const router = Router();

router.post(
    '/signin', // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.loginUserController
);

router.post(
    '/signup',
    Use.signupUserValidator,
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Create']),
    UserController.signupUserController
);

router.get(
    '/',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.getAllUserController
);

router.get(
    '/:_id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.getOneUserController
);

router.put(
    '/update',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Create']),
    UserController.updateUserController
);

router.put(
    '/disable/:_id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Disable']),
    UserController.disableUserController
);

export default router;
