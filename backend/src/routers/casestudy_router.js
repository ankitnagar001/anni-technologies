import { Router } from 'express';
import {
  getCaseStudies,
  getCaseStudyBySlug,
  createCaseStudy,
  updateCaseStudy,
  deleteCaseStudy
} from '../controllers/casestudy_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getCaseStudies);
router.get('/:slug', getCaseStudyBySlug);
router.post('/', verifyJWT, createCaseStudy);
router.put('/:id', verifyJWT, updateCaseStudy);
router.delete('/:id', verifyJWT, deleteCaseStudy);

export default router;
