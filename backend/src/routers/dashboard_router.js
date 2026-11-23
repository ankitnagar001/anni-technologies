import { Router } from 'express';
import { getDashboardStats } from '../controllers/dashboard_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/stats', verifyJWT, getDashboardStats);

export default router;
