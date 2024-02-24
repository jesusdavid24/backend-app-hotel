import { Request } from 'express';
import { Users } from '../api/users/user.types'

export interface AuthRequest extends Request {
  users?: Users;
}
