import { Router } from 'express';
import {
  getRole,
  getRolesById,
  createRole
} from './role.controller';

const router = Router();

router.get('/', getRole);
router.get('/:id', getRolesById);
router.post('/', createRole);

export default router;