import { PrismaClient } from '@prisma/client';
import type { Booking } from './booking.types';
import { getById, getUserByEmail } from '@api/users/user.service';

const prisma = new PrismaClient();

export async function getAllBooking() {
  const bookings = await prisma.booking.findMany();
  return bookings;
}

export async function create(data: Booking) {
  if (!data.userWithouPasswordId) {
    throw Error('User not found');
  }

  const user = await getById(data.userWithouPasswordId);

  const booking = await prisma.booking.create({
    data: {
      ...data,
      createBy: `${user.firstName} ${user.lastName}`,
      status: 'PENDING'
    }
  });

  return booking;
}

export async function getByIdBooking(id: string) {
  const booking = await prisma.booking.findUnique({
    where: {
      id
    }
  });

  return booking;
}

export async function getEmailBooking(email: string) {
  const user = await getUserByEmail(email);
  console.log('user', user);

  if (!user) {
    throw new Error('Email not exist');
  }

  const booking = await prisma.booking.findFirst({
    where: {
      userWithouPasswordId: user.id
    }
  });

  return booking;
}

export async function getBookingsByUserId(id: string) {
  const booking = await prisma.booking.findMany({
    where: {
      userWithouPasswordId: id
    }
  });
  return booking;
}

export async function destroy(id: string) {
  const booking = await prisma.booking.update({
    where: {
      id
    },
    data: {
      status: 'CANCELLED'
    }
  });

  return booking;
}

export async function put(id: string, data: Booking) {
  const booking = await prisma.booking.update({
    where: {
      id
    },
    data
  });

  return booking;
}
