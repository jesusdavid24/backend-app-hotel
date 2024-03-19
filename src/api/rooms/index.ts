import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '@middleware/verifyRole';

import {
  getRoom,
  getById,
  createRoom,
  deleteRoom,
  updateRoom
} from './rooms.controller';

const router = Router();

router
  .all(
    '*',
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN')
  )
  .get('/', getRoom)
  .get('/:id', getById)
  .post('/', createRoom)
  .delete('/:id', deleteRoom)
  .put('/:id', updateRoom);

export default router;
