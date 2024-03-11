import { Strategy } from 'passport-local';
import { getUserByEmail } from '../api/users/user.service';
import { comparePassword } from '../utils/bcrypt';

const LocalStrategy = new Strategy({
  usernameField: 'email'
},
  async (email, password, done) => {
    try {
      const user = await getUserByEmail(email);

      if (!user) {
        return done(null, false, { message: 'unauthorized' });
      }

      const isMatch = await comparePassword(password, user.password)

      if (!isMatch) {
        return done(null, false, { message: 'unauthorized' });
      }

      done(null, user);

    } catch (exception: unknown) {
      done(exception)
    }
  }
);

export default LocalStrategy;