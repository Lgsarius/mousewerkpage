export const runtime = 'edge';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parseString } from 'xml2js';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin')?.value === 'true';

  if (!isAdmin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const xmlPath = path.join(process.cwd(), 'data', 'bookings.xml');
  
  if (!fs.existsSync(xmlPath)) {
    return NextResponse.json([]);
  }

  const xmlData = fs.readFileSync(xmlPath, 'utf-8');

  return new Promise((resolve) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        resolve(NextResponse.json({ message: 'Error parsing XML' }, { status: 500 }));
      } else {
        const bookings = result.bookings?.booking?.map(booking => ({
          name: booking.name[0],
          email: booking.email[0],
          projectType: booking.projectType[0],
          budget: booking.budget[0],
          timeline: booking.timeline[0],
        })) || [];
        resolve(NextResponse.json(bookings));
      }
    });
  });
}
