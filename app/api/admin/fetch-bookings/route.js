export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { parseString } from 'xml2js';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = cookies();
    const isAdmin = cookieStore.get('admin')?.value === 'true';

    if (!isAdmin) {
      console.log('Unauthorized access attempt');
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const xmlPath = path.join(process.cwd(), 'data', 'bookings.xml');
    
    try {
      await fs.access(xmlPath);
    } catch {
      console.log('bookings.xml file not found');
      return NextResponse.json([]);
    }

    const xmlData = await fs.readFile(xmlPath, 'utf-8');

    return new Promise((resolve) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
          resolve(NextResponse.json({ message: 'Error parsing XML' }, { status: 500 }));
        } else {
          const bookings = result.bookings?.booking?.map(booking => ({
            id: booking.id[0],
            name: booking.name[0],
            email: booking.email[0],
            projectType: booking.projectType[0],
            budget: booking.budget[0],
            timeline: booking.timeline[0],
            description: booking.description[0],
            status: booking.status ? booking.status[0] : 'pending',
            notes: booking.notes ? booking.notes[0] : '',
          })) || [];
          console.log(`Fetched ${bookings.length} bookings`);
          resolve(NextResponse.json(bookings));
        }
      });
    });
  } catch (error) {
    console.error('Unexpected error in GET route:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
