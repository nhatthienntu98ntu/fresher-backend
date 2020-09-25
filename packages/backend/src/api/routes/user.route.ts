import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares';
import { UserController } from '../controllers';

const router = Router();

router.get(
    '/',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.getAllUserController
);

router.get(
    '/:id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.getOneUserController
);

router.post(
    '/',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Create']),
    UserController.cretaeUserController
);

router.put(
    '/:id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Create']),
    UserController.editUserController
);

router.post(
    '/:id/disable',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Disable']),
    UserController.disableUserController
);

export default router;
