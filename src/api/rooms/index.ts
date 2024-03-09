import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '../../middleware/verifyRole';

import {
  getRoom,
  getById,
  createRoom,
  deleteRoom,
  updateRoom
} from './rooms.controller';

const router = Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN',),
  getRoom
);

router.get('/:id', getById);

router.post(
  '/', passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN',),
  createRoom
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN',),
  deleteRoom
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN',),
  updateRoom
);



export default router;