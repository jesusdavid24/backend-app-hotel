import { Router } from 'express';
import { uploadFilesToGPC } from './uploadImages';

const router = Router();

router.post('/', uploadFilesToGPC);

export default router;