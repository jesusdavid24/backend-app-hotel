import { Request, Response } from 'express';

import errorHandler from '../../utils/errorHandler/errorHandler';
import { signToken } from './local.service';
import { User } from '../../api/users/user.types';
import { getRoleById } from '../../api/role/role.service';

export async function login(req: Request, res: Response) {

  try {
    const user = req.user as User;
    const role = await getRoleById(user.roleId)

    const payload = {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      roleId: role.name,
    }

    const token = signToken(payload);

    const userLogged = {
      name: `${user.firstName} ${user.lastName}`,
      roleId: role.name,
      recoveryToken: user.recoveryToken,
    }

    res.json({ token, userLogged });

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}