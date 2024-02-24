import { PrismaClient } from '@prisma/client';
import { Users } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.users.findMany();
  return users
}

export async function create(data: Users) {

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

export async function getById(id: string) {
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

export async function destroy(id: string) {
  const user = await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      isDeleted: false
    }
  });

  return user;
}

export async function put(id: string, data: Users) {
  const user = await prisma.users.update({
    where: {
      id: id,
    },
    data
  })

  return user;
}