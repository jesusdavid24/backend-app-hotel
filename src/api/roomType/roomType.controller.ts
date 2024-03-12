import { type Request, type Response } from 'express';
import errorHandler from '@utils/errorHandler';

import { getAllRoomType, destroy, create, put } from './roomType.service';

export async function getRoomType(req: Request, res: Response) {
  try {
    const roomType = await getAllRoomType();
    return res.json(roomType);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createRoomType(req: Request, res: Response) {
  try {
    const data = req.body;

    const roomType = await create(data);

    return res.status(201).json(roomType);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteRoomType(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await destroy(id);

    return res.end();
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateRoomType(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const roomType = await put(id, data);

    return res.json(roomType);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
