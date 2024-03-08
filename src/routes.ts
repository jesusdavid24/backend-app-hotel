import { Application } from 'express';
import userRouter from './api/users';
import bookingRouter from './api/booking';
import roomRouter from './api/rooms';
import amenityRouter from './api/amenity';
import ruleRouter from './api/rule';
import imagesRouter from './api/images';
import loginRouter from './auth/local';
import roleRouter from './api/role';
import roomTypeRouter from './api/roomType';
import potencialUserRouter from './api/potencialUser';
import healthCheckRouter from './api/healtCheck';


const routes = (app: Application) => {
  app.use('/api/user', userRouter);
  app.use('/api/booking', bookingRouter);
  app.use('/api/room', roomRouter);
  app.use('/api/rule', ruleRouter);
  app.use('/api/amenity', amenityRouter);
  app.use('/api/upload-images', imagesRouter);
  app.use('/api/role', roleRouter);
  app.use('/api/room-type', roomTypeRouter);
  app.use('/api/potencial-user', potencialUserRouter);
  app.use('/api/healthCheck', healthCheckRouter);
  app.use('/login', loginRouter);
}

export default routes;