import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
} from "./user.controller";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser)

export default router;