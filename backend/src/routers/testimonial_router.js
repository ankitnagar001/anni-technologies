import { Router } from 'express';
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} from '../controllers/testimonial_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getTestimonials);
router.post('/', verifyJWT, createTestimonial);
router.put('/:id', verifyJWT, updateTestimonial);
router.delete('/:id', verifyJWT, deleteTestimonial);

export default router;
