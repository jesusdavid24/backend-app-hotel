import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '@middleware/verifyRole';

import {
  getIdentificationType,
  createIdentificationType,
  deleteIdentificationType,
  updateIdentificationType
} from './identificationType.controller';

const router = Router();

router
  .all(
    '*',
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN')
  )
  .get('/', getIdentificationType)
  .post('/', createIdentificationType)
  .put('/:id', updateIdentificationType)
  .delete('/:id', deleteIdentificationType);

export default router;
