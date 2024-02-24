import { Router } from 'express';
import {
  getAllUsersHandler,
  getUserByIdHandler,
  userCreateHandler,
} from "./user.controller";

const router = Router();

router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.post('/', userCreateHandler);

export default router;