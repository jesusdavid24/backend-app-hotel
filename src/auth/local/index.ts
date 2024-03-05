import { Router } from 'express';
import passport from 'passport';
import { login } from './local.controller';
import { sendEmailRecovery } from '../recoveryPassword';

const router = Router();

router.post('/', passport.authenticate('local', { session: false }), login);
router.post('/recovery', sendEmailRecovery);


export default router;