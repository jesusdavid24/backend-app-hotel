import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler';

import { create } from './amenity.service';

export async function createAmenity(req: Request, res: Response) {
  try {
    const data = req.body;

    const amenity = await create(data);

    return res.status(201).json(amenity);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}