import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    // Validate the booking ID
    if (!id) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

    // Update the booking
    const updatedBooking = await PrismaClient.booking.update({
      where: { id: parseInt(id) },
      data: {
        status: data.status,
        notes: data.notes,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    );
  }
} 