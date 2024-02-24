import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler';
import {
  getAllUser,
  getUserById,
  getUserByEmail,
  createUsers,
} from './user.service';

export async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const { email } = req.query;

    if (email) {
      const user = await getUserByEmail(email as string)
      return res.status(200).json(user)
    }

    const users = await getAllUser();

    return res.status(200).send(users);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function getUserByIdHandler(req: Request, res: Response) {
  try {

    const { id } = req.params;

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return res.status(200).send(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function userCreateHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const user = await createUsers(data);
    return res.status(201).json(user)
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

