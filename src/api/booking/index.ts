import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '@middleware/verifyRole';

import {
  getBookings,
  getBookingById,
  getBookingsByUser,
  getBookignByEmail,
  createBooking,
  deleteBooking,
  updateBooking
} from './booking.controller';

const router = Router();

router.get('/by-email', getBookignByEmail);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN'),
  getBookingById
);

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN'),
  getBookings
);

router.get(
  '/user/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN'),
  getBookingsByUser
);

router.post('/', createBooking);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN', 'CUSTOMER'),
  deleteBooking
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN', 'CUSTOMER'),
  updateBooking
);

export default router;
