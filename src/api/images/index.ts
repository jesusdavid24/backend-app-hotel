import { Router } from 'express';
import { uploadFiles } from './uploadImages.controller';
import Multer from 'multer';

const router = Router();

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
  },
});

router.post('/:id', multer.single('file'), uploadFiles);

export default router;