import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = params;
    const updateData = await req.json();

    const updatedBooking = await prisma.booking.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return NextResponse.json({
      message: 'Booking updated successfully',
      booking: updatedBooking,
    });
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 