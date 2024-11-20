export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Map serviceType to projectType and prepare booking data
    const bookingData = {
      name: formData.name,
      email: formData.email,
      company: formData.company || null,
      projectType: formData.serviceType, // Map serviceType to projectType
      budget: formData.fileFormat, // Using fileFormat as budget since it's required in schema
      timeline: formData.timeline,
      description: formData.description
    };

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
