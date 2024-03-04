import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '../../middleware/verifyRole';

import {
  getBookings,
  getBookingById,
  getBookingsByUser,
  createBooking,
  deleteBooking,
  updateBooking
} from './booking.controller';


const router = Router();

router.all('*', [
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN', 'CLIENT'),
])
  .get('/:id', getBookingById)
  .get('/', getBookings)
  .get('/user/:id', getBookingsByUser)
  .post('/', createBooking)
  .delete('/:id', deleteBooking)
  .put('/:id', updateBooking);

export default router;