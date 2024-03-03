import passport from 'passport';
import LocalStrategy from './middleware/strategies/local.strategy';

const passportStrategies = passport.use(LocalStrategy);

export default passportStrategies;