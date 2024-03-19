import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '@middleware/verifyRole';

import {
  createAmenity,
  getAmenities,
  deleteAmenity,
  updateAmenity
} from './amenity.controller';

const router = Router();

router
  .all('*', [
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN')
  ])
  .get('/', getAmenities)
  .post('/', createAmenity)
  .delete('/:id', deleteAmenity)
  .put('/:id', updateAmenity);

export default router;
