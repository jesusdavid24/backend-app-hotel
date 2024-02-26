import { Router } from 'express';
import { createAmenity } from './amenity.controller';

const router = Router();

router.post('/', createAmenity);

export default router;