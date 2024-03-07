import { Request, Response } from 'express';
import { sendNodeMailer } from '../config/nodemailer';
import { welcomeEmail } from '../utils/emails/sendEmail';
import { changePassword } from './local/local.service';
import { getUserByEmail } from '../api/users/user.service';
import errorHandler from '../utils/errorHandler/errorHandler';


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

    const answer = await changePassword(token, newPassword)

    return res.send(answer)

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}