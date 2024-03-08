import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '../../middleware/verifyRole';

import {
  getBookings,
  getBookingById,
  getBookingsByUser,
  createBooking,
  createBookingWithoutLogin,
  deleteBooking,
  updateBooking
} from './booking.controller';


const router = Router();


router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN',),
  getBookingById
);

router.get(
  '/', passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN',),
  getBookings
);

router.get(
  '/user/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN',),
  getBookingsByUser
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN', 'CLIENT'),
  createBooking
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN', 'CLIENT'),
  deleteBooking
);

router.put(
  '/:id', passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN', 'CLIENT'),
  updateBooking
);


router.post('/create', createBookingWithoutLogin);

export default router;