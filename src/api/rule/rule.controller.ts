import { type Request, type Response } from 'express';
import errorHandler from '../../utils/errorHandler';

import {
  put,
  create,
  destroy,
  getRules,
} from './rule.service';

export async function getAllRules(req: Request, res: Response) {
  try {
    const rules = await getRules();

    return res.status(200).json(rules);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

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

export async function deleteRule(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const rule = await destroy(id);

    return res.status(200).json(rule)
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateRule(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const rule = await put(id, data);

    return res.status(200).json(rule)
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}