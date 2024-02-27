import { PrismaClient } from '@prisma/client';
import { Amenity } from './amenity.types';

const prisma = new PrismaClient();

export async function getAmenity() {
  const amenity = prisma.amenity.findMany();
  return amenity;
}

export async function create(data: Amenity) {
  const amenity = prisma.amenity.create({
    data,
  });

  return amenity;
}

export async function destroy(id: string) {
  const amenity = prisma.amenity.update({
    where: {
      id: id
    },
    data: {
      isDeleted: true
    }
  });

  return amenity;
}

export async function put(id: string, data: Amenity) {
  const amenity = prisma.amenity.update({
    where: {
      id: id
    },
    data,
  });

  return amenity;
}