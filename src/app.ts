import express from 'express';
import ConfigExpress from './config/express';
import routes from './routes';
import 'dotenv/config';

import { passportLocal, passportJwt } from './config/passport';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv');
}

const app = express();
const PORT = process.env.PORT ?? 3001;

ConfigExpress(app);
routes(app);

passportLocal();
passportJwt();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
