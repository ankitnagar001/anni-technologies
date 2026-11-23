import { Router } from 'express';
import {
  getServices,
  getServiceBySlug,
  createService,
  updateService,
  deleteService
} from '../controllers/service_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getServices);
router.get('/:slug', getServiceBySlug);
router.post('/', verifyJWT, createService);
router.put('/:id', verifyJWT, updateService);
router.delete('/:id', verifyJWT, deleteService);

export default router;
