import { PrismaClient } from '@prisma/client';
import { hashPassword } from '@utils/bcrypt';
import { type User } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.userWithouPassword.findMany();
  return users;
}

export async function create(input: User) {

  let hashedPassword = null;

  if(input.password) {
    hashedPassword = await hashPassword(input.password)
  }
  
  const data = {
    ...input,
    password: hashedPassword
  }

  const user = await prisma.userWithouPassword.upsert({
    where: {
      email: data.email
    },
    create: {
      ...data,
      requiresAuth: true
    },
    update: {
      ...data,
    }
  });

  return user;
}

export async function getById(id: string) {
  const user = await prisma.userWithouPassword.findUnique({
    where: {
      id,
    }
  });


  return user!;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.userWithouPassword.findUnique({
    where: {
      email,
    }
  });

  return user;
}

export async function destroy(id: string) {
  const user = await prisma.userWithouPassword.update({
    where: {
      id,
    },
    data: {
      isDeleted: true
    }
  });

  return user;
}

export async function put(id: string, data: Partial<User>) {
  const user = await prisma.userWithouPassword.update({
    where: {
      id,
    },
    data
  })

  return user;
}

