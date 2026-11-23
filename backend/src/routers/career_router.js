import { Router } from 'express';
import {
  getJobs,
  getJobBySlug,
  createJob,
  updateJob,
  deleteJob,
  applyJob,
  getApplications
} from '../controllers/career_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';
import { formLimiter } from '../middleware/ratelimit_middleware.js';

const router = Router();

router.get('/', getJobs);
router.get('/applications', verifyJWT, getApplications);
router.get('/:slug', getJobBySlug);
router.post('/', verifyJWT, createJob);
router.put('/:id', verifyJWT, updateJob);
router.delete('/:id', verifyJWT, deleteJob);
router.post('/:jobId/apply', formLimiter, applyJob);

export default router;
