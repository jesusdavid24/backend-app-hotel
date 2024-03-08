import { PrismaClient } from '@prisma/client';
import { RoomType } from './roomType.type';

const prisma = new PrismaClient();

export async function getAllRoomType() {
  const roomType = await prisma.roomType.findMany();
  return roomType;
}

export async function create(data: RoomType) {
  const roomType = await prisma.roomType.create({
    data,
  });

  return roomType;
}

export async function destroy(id: string) {
  const roomType = await prisma.roomType.update({
    where: {
      id: id,
    },
    data: {
      isDeleted: true
    }
  });

  return roomType;
}

export async function put(id: string, data: Partial<RoomType>) {
  const roomType = await prisma.roomType.update({
    where: {
      id: id
    },
    data,
  });

  return roomType;
}