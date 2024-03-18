import type { Request, Response } from 'express';
import errorHandler from '@utils/errorHandler';
import { type IdentificationType } from './identificationType.type';

import {
  getAllIdentificationType,
  create,
  destroy,
  put
} from './identificationType.service';

export async function getIdentificationType(req: Request, res: Response) {
  try {
    const identificationType = await getAllIdentificationType();

    return res.json(identificationType);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createIdentificationType(req: Request, res: Response) {
  try {
    const data: IdentificationType = req.body;

    const identificationType = await create(data);

    return res.status(201).json(identificationType);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteIdentificationType(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await destroy(id);

    return res.end();
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateIdentificationType(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const identificationType = await put(id, data);

    return res.json(identificationType);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
