export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(request) {
  const { password } = await request.json();
  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set('admin', 'true', { httpOnly: true, maxAge: 3600 });
    return response;
  } else {
    return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
  }
}
