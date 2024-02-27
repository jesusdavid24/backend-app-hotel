import { PrismaClient } from '@prisma/client';
import { Rule } from './rule.type';

const prisma = new PrismaClient();

export async function getRules() {
  const rules = prisma.rule.findMany();
  return rules;
}

export async function create(data: Rule) {
  const rule = prisma.rule.create({
    data,
  });

  return rule
}

export async function destroy(id: string) {
  const rule = prisma.rule.update({
    where: {
      id: id
    },
    data: {
      isDeleted: true
    }
  });

  return rule;
}

export async function put(id: string, data: Rule) {
  const rule = prisma.rule.update({
    where: {
      id: id
    },
    data,
  });

  return rule;
}