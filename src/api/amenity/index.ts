import { Router } from 'express';
import {
  createAmenity,
  getAmenities,
  deleteAmenity,
  updateAmenity
} from './amenity.controller';

const router = Router();

router.get('/', getAmenities);
router.post('/', createAmenity);
router.delete('/:id', deleteAmenity);
router.put('/:id', updateAmenity)

export default router;