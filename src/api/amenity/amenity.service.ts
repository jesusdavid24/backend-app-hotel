import { PrismaClient } from '@prisma/client';
import { Amenity } from './amenity.types';

const prisma = new PrismaClient();

export async function create(data: Amenity) {
  const amenity = prisma.amenity.create({
    data,
  });

  return amenity;
}