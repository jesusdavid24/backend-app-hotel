import { Request, Response } from 'express';

import errorHandler from '../../utils/errorHandler/errorHandler';
import { signToken } from './local.service';
import { User } from '../../api/users/user.types';
import { getRoleById } from '../../api/role/role.service';

export async function login(req: Request, res: Response) {

  try {
    const user = req.user as User;
    const role = await getRoleById(user.roleId)
    const roleName = role?.name;


    const payload = {
      id: user.id,
      name: user.name,
      roleId: roleName as string,
    }

    const token = signToken(payload);

    const userLogged = {
      name: user.name,
      roleId: roleName as string,
    }

    res.json({ token, userLogged });

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}