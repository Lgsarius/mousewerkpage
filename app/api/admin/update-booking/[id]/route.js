export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parseString, Builder } from 'xml2js';
import { cookies } from 'next/headers';

export async function PUT(request, { params }) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin')?.value === 'true';

  if (!isAdmin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: 'Booking ID is required' }, { status: 400 });
  }

  const updateData = await request.json();

  const xmlPath = path.join(process.cwd(), 'data', 'bookings.xml');
  
  if (!fs.existsSync(xmlPath)) {
    return NextResponse.json({ message: 'Bookings file not found' }, { status: 404 });
  }

  const xmlData = fs.readFileSync(xmlPath, 'utf-8');

  return new Promise((resolve) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        resolve(NextResponse.json({ message: 'Error parsing XML' }, { status: 500 }));
      } else {
        if (!result.bookings || !Array.isArray(result.bookings.booking)) {
          resolve(NextResponse.json({ message: 'Invalid XML structure' }, { status: 500 }));
          return;
        }

        const bookingIndex = result.bookings.booking.findIndex(booking => 
          booking.id && booking.id[0] === id
        );

        if (bookingIndex === -1) {
          resolve(NextResponse.json({ message: 'Booking not found' }, { status: 404 }));
        } else {
          // Update the booking
          Object.keys(updateData).forEach(key => {
            result.bookings.booking[bookingIndex][key] = [updateData[key]];
          });

          // Convert back to XML and save
          const builder = new Builder();
          const updatedXml = builder.buildObject(result);
          fs.writeFileSync(xmlPath, updatedXml);

          resolve(NextResponse.json({ message: 'Booking updated successfully' }));
        }
      }
    });
  });
}
