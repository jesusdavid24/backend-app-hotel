import {
  Request,
  Response,
  NextFunction
} from 'express';

import { User } from '../api/users/user.types';

export function checkRole(role: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;
    console.log(user.roleId);
    if (role.includes(user.roleId)) {
      return next()
    } else {
      return res.json({ message: 'Forbidden' })
    }
  };
}

