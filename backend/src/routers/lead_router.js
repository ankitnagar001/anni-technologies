import { Router } from 'express';
import { createLead, getLeads, updateLead, deleteLead } from '../controllers/lead_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';
import { formLimiter } from '../middleware/ratelimit_middleware.js';

const router = Router();

router.post('/', formLimiter, createLead);
router.get('/', verifyJWT, getLeads);
router.patch('/:id', verifyJWT, updateLead);
router.delete('/:id', verifyJWT, deleteLead);

export default router;
