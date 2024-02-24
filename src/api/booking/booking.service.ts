import { PrismaClient } from '@prisma/client';
import { Booking } from './booking.types';

const prisma = new PrismaClient();

export async function getAllBooking() {
  const bookings = await prisma.booking.findMany();
  return bookings;
}

export async function create(data: Booking) {
  const booking = await prisma.booking.create({
    data
  });

  return booking;
}

export async function getById(id: string) {
  const booking = await prisma.booking.findUnique({
    where: {
      id,
    }
  });

  return booking;
}

export async function destroy(id: string) {
  const booking = await prisma.booking.update({
    where: {
      id: id,
    },
    data: {
      bookingStatus: 'CANCELLED'
    }
  });
}

export async function put(id: string, data: Booking) {
  const booking = await prisma.booking.update({
    where: {
      id: id,
    },
    data
  });

  return booking;
}