import { Router } from 'express';
import authRouter from './auth_router.js';
import leadRouter from './lead_router.js';
import bookingRouter from './booking_router.js';
import serviceRouter from './service_router.js';
import projectRouter from './project_router.js';
import casestudyRouter from './casestudy_router.js';
import blogRouter from './blog_router.js';
import technologyRouter from './technology_router.js';
import teamRouter from './team_router.js';
import careerRouter from './career_router.js';
import testimonialRouter from './testimonial_router.js';
import faqRouter from './faq_router.js';
import dashboardRouter from './dashboard_router.js';
import uploadRouter from './upload_router.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/leads', leadRouter);
router.use('/bookings', bookingRouter);
router.use('/services', serviceRouter);
router.use('/projects', projectRouter);
router.use('/case-studies', casestudyRouter);
router.use('/blog', blogRouter);
router.use('/technologies', technologyRouter);
router.use('/team', teamRouter);
router.use('/jobs', careerRouter);
router.use('/testimonials', testimonialRouter);
router.use('/faqs', faqRouter);
router.use('/dashboard', dashboardRouter);
router.use('/upload', uploadRouter);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime(), timestamp: new Date() });
});

export default router;
