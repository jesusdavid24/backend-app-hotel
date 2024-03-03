import { Request, Response } from 'express';

import errorHandler from '../../utils/errorHandler/errorHandler';
import { signToken } from './local.service';
import { User } from '../../api/users/user.types'

export async function login(req: Request, res: Response) {

  try {
    const user = req.user as User;

    const payload = {
      id: user.id,
      role: user.role,
    }

    console.log(payload);

    const token = signToken(payload);

    const userLogged = {
      name: user.name,
      role: user.role
    }

    res.json({ token, userLogged });

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}