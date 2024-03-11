import { Request } from 'express';

import { User } from '../api/users/user.types';

export type PayloadType = {
  id: string;
  name: string;
  roleId: string;
  iat?: number;
  exp?: number;
}

export interface AuthRequest extends Request {
  user?: User
}
