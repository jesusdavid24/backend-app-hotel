import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '@middleware/verifyRole';

import {
  createRule,
  deleteRule,
  updateRule,
  getAllRules
} from './rule.controller';

const router = Router();

router
  .all('*', [
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN')
  ])
  .get('/', getAllRules)
  .post('/', createRule)
  .delete('/:id', deleteRule)
  .put('/:id', updateRule);

export default router;
