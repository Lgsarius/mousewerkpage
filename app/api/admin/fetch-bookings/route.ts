import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/utils/supabase';

export async function GET() {
  try {
    // Fix: await the cookies
    const cookieStore = await cookies();
    const adminCookie = cookieStore.get('admin');
    const isAdmin = adminCookie?.value === 'true';

    if (!isAdmin) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Fetch bookings from Supabase
    const { data: bookings, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return new NextResponse('Database Error', { status: 500 });
    }

    return NextResponse.json(bookings);

  } catch (error) {
    console.error('Server error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 