import { Router } from 'express';
import {
  getTechnologies,
  createTechnology,
  updateTechnology,
  deleteTechnology
} from '../controllers/technology_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getTechnologies);
router.post('/', verifyJWT, createTechnology);
router.put('/:id', verifyJWT, updateTechnology);
router.delete('/:id', verifyJWT, deleteTechnology);

export default router;
