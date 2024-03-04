import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '../../middleware/verifyRole';

import {
  getRole,
  getRolesById,
  createRole
} from './role.controller';

const router = Router();

router.all('*', [
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN'),
])
  .get('/', getRole)
  .get('/:id', getRolesById)
  .post('/', createRole)

export default router;