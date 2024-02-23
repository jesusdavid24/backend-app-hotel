import { Application } from 'express';
import userRouter from './api/users';
import healthCheckRouter from './api/healtCheck'

const routes = (app: Application) => {
  app.use('/api/createUser', userRouter);
  app.use('/api/healthCheck', healthCheckRouter);
}

export default routes;