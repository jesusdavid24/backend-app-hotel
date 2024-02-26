import { Router } from 'express';
import {
  getRoom,
  createRoom,
  deleteRoom,
  updateRoom
} from './rooms.controller';

const router = Router();

router.get('/', getRoom);
router.post('/', createRoom);
router.delete('/:id', deleteRoom);
router.put('/:id', updateRoom);

export default router;