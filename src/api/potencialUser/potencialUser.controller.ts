import { type Request, type Response } from 'express';
import { type PotencialUser } from './potencialUser.type';
import { getWsClient } from 'src/config/webSocket';
import errorHandler from '@utils/errorHandler';

import { getAllUser, destroy, createUser, put } from './potencialUser.service';

export async function getUsers(req: Request, res: Response) {
  try {
    const user = await getAllUser();

    return res.json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createPotencialUser(req: Request, res: Response) {
  try {
    const data: PotencialUser = req.body;

    const user = await createUser(data);
    getWsClient().emit('userCreated', user);

    return res.status(201).json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deletePotencialUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await destroy(id);

    return res.end();
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updatePotencialUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: PotencialUser = req.body;

    const user = await put(id, data);

    return res.json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
