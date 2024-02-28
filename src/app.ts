import express from 'express';
import ConfigExpress from './config/express';
import routes from './routes';
import Multer from 'multer';
import { uploadFiles } from './middleware/uploadImages';

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
  },
});

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 3001

ConfigExpress(app);
routes(app)

app.post('/upload', multer.single('file'), uploadFiles, (req, res) => {
  console.log('BODY', req.body)
  res.json(req.body)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});