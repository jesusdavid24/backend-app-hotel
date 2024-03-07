import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler/errorHandler';

import {
  getAllRoom,
  create,
  destroy,
  put
} from './rooms.service';

export async function getRoom(req: Request, res: Response) {
  try {
    const rooms = await getAllRoom();
    return res.status(200).json(rooms);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createRoom(req: Request, res: Response) {
  try {
    const data = req.body;

    const room = await create(data)

    return res.status(201).json(room);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteRoom(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await destroy(id);

    return res.end();

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateRoom(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const room = await put(id, data);

    return res.json(room);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

