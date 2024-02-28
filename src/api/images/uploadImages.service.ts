import { PrismaClient } from '@prisma/client';
import { Room } from '../rooms/rooms.type';

const prisma = new PrismaClient();

export async function put(id: string, imagesUrl: string[]) {
  const image = await prisma.room.update({
    where: {
      id: id
    },
    data: {
      imagesUrl: imagesUrl
    }
  });

  return image;
}
