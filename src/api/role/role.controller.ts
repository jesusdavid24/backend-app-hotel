import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler/errorHandler';
import {
  getAllRole,
  getRoleById,
  create
} from './role.service';

export async function getRole(req: Request, res: Response) {
  try {
    const role = await getAllRole();
    return res.json(role);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function getRolesById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const role = await getRoleById(id)

    return res.json(role);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createRole(req: Request, res: Response) {
  try {
    const data = req.body;

    const role = await create(data);

    return res.status(201).json(role);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}