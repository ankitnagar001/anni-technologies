import { Router } from 'express';
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/project_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);
router.post('/', verifyJWT, createProject);
router.put('/:id', verifyJWT, updateProject);
router.delete('/:id', verifyJWT, deleteProject);

export default router;
