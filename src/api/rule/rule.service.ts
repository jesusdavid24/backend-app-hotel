import { PrismaClient } from '@prisma/client';
import { type Rule } from './rule.type';

const prisma = new PrismaClient();

export async function getRules() {
  const rules = prisma.rule.findMany();
  return await rules;
}

export async function create(data: Rule) {
  const rule = prisma.rule.create({
    data,
  });

  return await rule
}

export async function destroy(id: string) {
  const rule = prisma.rule.update({
    where: {
      id
    },
    data: {
      isDeleted: true
    }
  });

  return await rule;
}

export async function put(id: string, data: Rule) {
  const rule = prisma.rule.update({
    where: {
      id
    },
    data,
  });

  return await rule;
}