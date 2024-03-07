import { Router } from 'express';
import { checkRole } from '../../middleware/verifyRole';

import {
  getUsers,
  deletePotencialUser,
  updatePotencialUser,
  createPotencialUser
} from './potencialUser.controller';

const router = Router();

router.get('/', checkRole('ADMIN'), getUsers);
router.post('/', createPotencialUser);
router.delete('/id', checkRole('ADMIN'), deletePotencialUser);
router.put('/id', checkRole('ADMIN'), updatePotencialUser)

export default router;
