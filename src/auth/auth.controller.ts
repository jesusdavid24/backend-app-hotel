import { type Request, type Response } from 'express';

import errorHandler from '../utils/errorHandler';
import { signToken , changePassword } from './auth.service';
import { type User } from '../api/users/user.types';
import { sendNodeMailer } from '../config/nodemailer';
import { welcomeEmail } from '../utils/sendEmail';

import { getUserByEmail } from '../api/users/user.service'
import { getRoleById } from '../api/role/role.service';

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

export async function sendEmailRecovery(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const userEmail = await getUserByEmail(email);

    if (!userEmail) {
      return res.status(403).send('Email does not exist')
    }

    const answer = await sendNodeMailer(await welcomeEmail(userEmail));

    return res.json(answer)

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function changesPasswords(req: Request, res: Response) {
  try {
    const { token, newPassword } = req.body;

    const answer = await changePassword(token, newPassword);

    return res.send(answer)

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}