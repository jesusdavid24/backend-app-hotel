import { Router } from 'express';
import passport from 'passport';
import { login } from './local.controller';

import {
  sendEmailRecovery,
  changesPasswords
} from '../recoveryPassword';

const router = Router();

router.post('/', passport.authenticate('local', { session: false }), login);
router.post('/recovery', sendEmailRecovery);
router.post('/change-password', changesPasswords);


export default router;