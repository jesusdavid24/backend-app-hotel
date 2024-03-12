import type { Request, Response } from 'express';
import errorHandler from '@utils/errorHandler';
import type { Amenity } from './amenity.types';

import { put, create, destroy, getAmenity } from './amenity.service';

export async function getAmenities(req: Request, res: Response) {
  try {
    const amenities = await getAmenity();
    return res.status(200).send(amenities);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createAmenity(req: Request, res: Response) {
  try {
    const data: Amenity = req.body;

    const amenity = await create(data);

    return res.status(201).json(amenity);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteAmenity(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await destroy(id);

    return res.end();
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateAmenity(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: Amenity = req.body;

    const amenity = await put(id, data);

    return res.json(amenity);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
