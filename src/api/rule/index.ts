import { Router } from 'express';
import { createRule } from './rule.controller';

const router = Router();

router.post('/', createRule);

export default router;