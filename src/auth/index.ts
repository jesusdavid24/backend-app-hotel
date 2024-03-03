import passport from 'passport';
import LocalStrategy from './middleware/strategies/local.strategy';
import JwtStrategy from './middleware/strategies/jwt.strategy';

export const passportLocal = passport.use(LocalStrategy);
export const passportJwt = passport.use(JwtStrategy);

