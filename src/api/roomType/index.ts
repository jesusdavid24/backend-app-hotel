import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '../../middleware/verifyRole';

import {
  getRoomType,
  createRoomType,
  deleteRoomType,
  updateRoomType
} from './roomType.controller';

const router = Router();

router.all('*', [
  passport.authenticate('jwt', { session: false }),
  checkRole('ADMIN'),
])
  .get('/', getRoomType)
  .post('/', createRoomType)
  .put('/:id', updateRoomType)
  .delete('/:id', deleteRoomType)

export default router;