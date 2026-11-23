import { Router } from 'express';
import { createBooking, getBookings, updateBooking } from '../controllers/booking_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';
import { formLimiter } from '../middleware/ratelimit_middleware.js';

const router = Router();

router.post('/', formLimiter, createBooking);
router.get('/', verifyJWT, getBookings);
router.patch('/:id', verifyJWT, updateBooking);

export default router;
