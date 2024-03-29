import { Application } from 'express';
import userRouter from './api/users';
import healthCheckRouter from './api/healtCheck';


const routes = (app: Application) => {
  app.use('/api/user', userRouter);
  app.use('/api/healthCheck', healthCheckRouter);
}

export default routes;