import { Response, NextFunction } from 'express';

import { AuthRequest } from '../auth/local/local.type';
import { getUserByEmail } from '../api/users/user.service';
import { User } from '../api/users/user.types';
import { verifyToken } from '../auth/local/local.service';

export async function isAuthenticated(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {

  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.json({ message: 'Unauthorized' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.json({ message: 'Unauthorized' });
  }

  const user = await getUserByEmail(decoded.email) as User

  req.user = user;

  return next()

}