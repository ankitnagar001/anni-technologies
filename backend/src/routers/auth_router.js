import { Router } from 'express';
import { login, logout, getMe, seedAdmin } from '../controllers/auth_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.post('/login', login);
router.post('/logout', verifyJWT, logout);
router.get('/me', verifyJWT, getMe);
router.post('/seed', seedAdmin);

export default router;
