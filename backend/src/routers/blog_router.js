import { Router } from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blog_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', verifyJWT, createBlog);
router.put('/:id', verifyJWT, updateBlog);
router.delete('/:id', verifyJWT, deleteBlog);

export default router;
