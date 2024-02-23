import { Router } from 'express';
import { userCreateHandler } from "./user.controller";

const router = Router();

router.post('/', userCreateHandler);

export default router;