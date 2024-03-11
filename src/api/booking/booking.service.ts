import { PrismaClient } from '@prisma/client';
import { getById } from '../users/user.service';
import type { Booking } from './booking.types';

const prisma = new PrismaClient();

export async function getAllBooking() {
  const bookings = await prisma.booking.findMany();
  return bookings;
}

export async function create(data: Booking) {
  const { status, ...input } = data;

  if (!input.userId) {
    throw Error('User not found');
  }

  const user = await getById(input.userId);

  const booking = await prisma.booking.create({
    data: {
      ...input,
      createBy: `${user.firstName} ${user.lastName}`
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

export async function getBookingsByUserId(id: string) {
  const booking = await prisma.booking.findMany({
    where: {
      userId: id
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
