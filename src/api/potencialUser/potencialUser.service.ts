import { PrismaClient } from '@prisma/client';
import { PotencialUser } from './potencialUser.type';

const prisma = new PrismaClient();

export async function getAllUser() {
  const user = await prisma.potencialUser.findMany();
  return user;
}

export async function createUser(data: PotencialUser) {
  const user = await prisma.potencialUser.create({
    data,
  });

  return user;
}

export async function destroy(id: string) {
  const user = await prisma.potencialUser.update({
    where: {
      id: id
    },
    data: {
      isDeleted: true
    }
  });

  return user;
}

export async function put(id: string, data: Partial<PotencialUser>) {
  const user = await prisma.potencialUser.update({
    where: {
      id: id
    },
    data,
  });

  return user;
}