import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function put(id: string, imagesUrl: string[]) {
  const image = await prisma.room.update({
    where: {
      id
    },
    data: {
      imagesUrl
    }
  });

  return image;
}
