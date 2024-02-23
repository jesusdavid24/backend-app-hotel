import { Request, Response } from 'express';
import { createUsers } from './user.service';
import errorHandler from '../../utils/errorHandler';

export async function  userCreateHandler(req: Request, res: Response) {
  try {
    const data = req.body;    

    const user = await createUsers(data);    
    return res.status(201).json(user)
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}