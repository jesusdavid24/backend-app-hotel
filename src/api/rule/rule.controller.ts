import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler';

import { create } from './rule.service';

export async function createRule(req: Request, res: Response) {
  try {
    const data = req.body;

    const rule = await create(data);

    return res.status(201).json(rule);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}