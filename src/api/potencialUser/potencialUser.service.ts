import { PrismaClient } from '@prisma/client';
import { type PotencialUser } from './potencialUser.type';

const prisma = new PrismaClient();

export async function getAllUser() {
  const user = await prisma.potencialUser.findMany();
  return user;
}

export async function getById(id: string) {
  const user = await prisma.potencialUser.findUnique({
    where: {
      id,
    }
  });


  return user!;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.potencialUser.findUnique({
    where: {
      email,
    }
  });

  return user;
}


export async function createUser(data: PotencialUser) {
  const user = await prisma.potencialUser.upsert({
    where: {
      email: data.email
    },
    create: {
      ...data,
    },
    update: {
      ...data
    }
  });

  return user;
}

export async function destroy(id: string) {
  const user = await prisma.potencialUser.update({
    where: {
      id
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
      id
    },
    data,
  });

  return user;
}