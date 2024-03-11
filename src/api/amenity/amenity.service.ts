import { PrismaClient } from '@prisma/client';
import type { Amenity } from './amenity.types';

const prisma = new PrismaClient();

export async function getAmenity() {
  const amenity = await prisma.amenity.findMany();
  return amenity;
}

export async function create(data: Amenity) {
  const amenity = await prisma.amenity.create({
    data
  });

  return amenity;
}

export async function destroy(id: string) {
  const amenity = await prisma.amenity.update({
    where: {
      id
    },
    data: {
      isDeleted: true
    }
  });

  return amenity;
}

export async function put(id: string, data: Amenity) {
  const amenity = await prisma.amenity.update({
    where: {
      id
    },
    data
  });

  return amenity;
}
