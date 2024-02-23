import { PrismaClient } from '@prisma/client';
import { Users } from './user.types';

const prisma = new PrismaClient();

export async function createUsers(data: Users) {

  const {email, ...userData} = data;

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
  })

  return user;
}

