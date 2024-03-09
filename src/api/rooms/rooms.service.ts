import { PrismaClient } from '@prisma/client';
import { Room } from './rooms.type';

const prisma = new PrismaClient();

export async function getAllRoom() {
  const room = prisma.room.findMany();
  return room;
}

export async function getRoomById(id: string) {
  const room = prisma.room.findUnique({
    where: {
      id: id
    }
  });

  return room;
}

export async function create(data: Room) {
  const room = prisma.room.create({
    data,
  });

  return room;
}

export async function destroy(id: string) {
  const room = await prisma.room.update({
    where: {
      id: id,
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
      id: id
    },
    data
  });

  return room;
}