import { PrismaClient } from '@prisma/client';
import { Users } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.users.findMany();
  return users
}

export async function createUsers(data: Users) {

  const { email, ...userData } = data;

  const user = await prisma.users.upsert({
    where: {
      email: email
    },
    create: {
      ...userData,
      email
    },
    update: {
      ...userData
    }
  });

  return user;
}

export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    }
  });

  return user;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: {
      email,
    }
  });

  return user;
}


