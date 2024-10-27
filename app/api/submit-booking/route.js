export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Builder, parseString } from 'xml2js';

export async function POST(request) {
  const booking = await request.json();
  const xmlPath = path.join(process.cwd(), 'data', 'bookings.xml');
  
  let bookings = { bookings: { booking: [] } };
  
  if (fs.existsSync(xmlPath)) {
    const xmlData = fs.readFileSync(xmlPath, 'utf-8');
    parseString(xmlData, (err, result) => {
      if (!err && result && result.bookings) {
        bookings = result;
      }
    });
  }
  
  bookings.bookings.booking.push(booking);
  
  const builder = new Builder();
  const xml = builder.buildObject(bookings);
  
  fs.writeFileSync(xmlPath, xml);
  
  return NextResponse.json({ message: 'Booking saved successfully' });
}

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
}
