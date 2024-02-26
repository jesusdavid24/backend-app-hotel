import { PrismaClient } from '@prisma/client';
import { Rule } from './rule.type';

const prisma = new PrismaClient();

export async function create(data: Rule) {
  const rule = prisma.rule.create({
    data,
  });

  return rule
}