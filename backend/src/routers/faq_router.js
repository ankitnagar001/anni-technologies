import { Router } from 'express';
import { getFaqs, createFaq, updateFaq, deleteFaq } from '../controllers/faq_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getFaqs);
router.post('/', verifyJWT, createFaq);
router.put('/:id', verifyJWT, updateFaq);
router.delete('/:id', verifyJWT, deleteFaq);

export default router;
