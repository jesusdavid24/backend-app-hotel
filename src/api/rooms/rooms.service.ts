import { PrismaClient } from '@prisma/client';
import { type Room } from './rooms.type';

const prisma = new PrismaClient();

export async function getAllRoom() {
  const room = prisma.room.findMany();
  return await room;
}

export async function getRoomById(id: string) {
  const room = prisma.room.findUnique({
    where: {
      id
    }
  });

  return await room;
}

export async function create(data: Room) {
  const room = prisma.room.create({
    data,
  });

  return await room;
}

export async function destroy(id: string) {
  const room = await prisma.room.update({
    where: {
      id,
    },
    data: {
      isDeleted: true
    }
  });

  return room;
}

export async function put(id: string, data: Room) {
  const room = await prisma.room.update({
    where: {
      id
    },
    data
  });

  return room;
}