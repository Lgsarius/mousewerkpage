export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const bookingData = await request.json();

    const newBooking = await prisma.booking.create({
      data: bookingData,
    });

    return NextResponse.json({ message: 'Booking saved successfully', booking: newBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
