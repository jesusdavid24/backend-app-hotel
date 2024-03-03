import express from 'express';
import ConfigExpress from './config/express';
import routes from './routes';
import passportJwt from './auth';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 3001

ConfigExpress(app);
routes(app)
passportJwt;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});