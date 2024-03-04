import { PrismaClient } from '@prisma/client';
import { Role } from './role.type';

const prisma = new PrismaClient();

export async function getAllRole() {
  const role = await prisma.role.findMany();
  return role;
}

export async function create(data: Role) {
  const role = await prisma.role.create({
    data,
  });

  return role;
}

export async function getRoleById(id: string) {
  const role = await prisma.role.findUnique({
    where: {
      id,
    },
    select: {
      name: true
    }
  });

  return role!;
}