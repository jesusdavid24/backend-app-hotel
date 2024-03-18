import type { UserWithouPassword } from '@prisma/client';

export type { UserWithouPassword };

export type User = Required<UserWithouPassword>;
