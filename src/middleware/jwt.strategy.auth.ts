import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload)
});

export default JwtStrategy;
