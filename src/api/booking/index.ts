import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '../../middleware/verifyRole'

import {
  getBookings,
  getBookingById,
  createBooking,
  deleteBooking,
  updateBooking
} from './booking.controller';


const router = Router();

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getBookingById
)
router.get('/', getBookings);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole(['ADMIN', 'CLIENT']),
  createBooking
);
router.delete('/:id', deleteBooking);
router.put('/:id', updateBooking)

export default router;