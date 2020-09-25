import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares';
import { StatusController } from '../controllers';

const router = Router();

router.get(
    '/',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.getAllStatusController
);

router.post(
    '/',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.createStatusController
);

export default router;
