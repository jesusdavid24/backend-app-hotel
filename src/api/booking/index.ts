import { Router } from 'express';
import passport from 'passport';
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
  createBooking
);
router.delete('/:id', deleteBooking);
router.put('/:id', updateBooking)

export default router;