import type {  Request, Response } from 'express';
import { type PotencialUser } from '@api/potencialUser/potencialUser.type';
import { type Booking } from './booking.types';
import { getUserByEmail } from '@api/users/user.service';
import { createUser } from '@api/potencialUser/potencialUser.service';
import { getRoomById } from '@api/rooms/rooms.service';
import errorHandler from '@utils/errorHandler';

import {
  getAllBooking,
  getByIdBooking,
  getBookingsByUserId,
  create,
  destroy,
  put
} from './booking.service';

export async function getBookings(req: Request, res: Response) {
  try {
    const bookings = await getAllBooking();
    return res.json(bookings);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function getBookingsByUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const bookingByUser = await getBookingsByUserId(id);

    return res.json(bookingByUser);
  } catch (exception) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function getBookingById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const booking = await getByIdBooking(id);

    if (!booking) {
      return res.end()
    }

    return res.json(booking);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createBookingWithoutLogin(req: Request, res: Response) {
  try {
    let user = null;

    const {
      identificationNumber,
      firstName,
      lastName,
      email,
      roomId,
      checkInDate,
      checkOutDate
    } = req.body;

    const newUser = {
      identificationNumber,
      firstName,
      lastName,
      email
    };

    user = await getUserByEmail(email as string);

    if (!user) {
      user = await createUser(newUser as PotencialUser);
    }

    const room = await getRoomById(roomId as string);

    if (!room) {
      return res.send('Room not found');
    }

    const newBooking = {
      checkInDate,
      checkOutDate,
      potencialUserId: user.id,
      roomId: room.id
    };

    const booking = await create(newBooking as Booking);

    return res.status(201).json(booking);

  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createBooking(req: Request, res: Response) {
  try {
    const data: Booking = req.body;

    const booking = await create(data);
    return res.status(201).json(booking)
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteBooking(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await destroy(id);

    return res.end();
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateBooking(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: Booking = req.body;

    const booking = await put(id, data);

    return res.json(booking)
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}