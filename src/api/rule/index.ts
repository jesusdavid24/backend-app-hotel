import { Router } from 'express';
import {
  createRule,
  deleteRule,
  updateRule,
  getAllRules,
} from './rule.controller';

const router = Router();

router.get('/', getAllRules);
router.post('/', createRule);
router.delete('/:id', deleteRule);
router.put('/:id', updateRule)

export default router;