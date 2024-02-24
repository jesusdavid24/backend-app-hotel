import { Router } from 'express';
import {
  getBookings,
  getBookingById,
  createBooking,
  deleteBooking,
  updateBooking
} from './booking.controller';

const router = Router();

router.get('/:id', getBookingById)
router.get('/', getBookings);
router.post('/', createBooking);
router.delete('/:id', deleteBooking);
router.put('/:id', updateBooking)

export default router;