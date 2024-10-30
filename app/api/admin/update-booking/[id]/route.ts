import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/utils/supabase';

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Check admin authentication
    const cookieStore = await cookies();
    const isAdmin = cookieStore.get('admin')?.value === 'true';

    if (!isAdmin) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = context.params;
    if (!id) {
      return NextResponse.json(
        { message: 'Booking ID is required' },
        { status: 400 }
      );
    }

    // Get update data from request body
    const updateData = await request.json();

    // Update booking in Supabase
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { message: 'Error updating booking' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { message: 'Booking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Booking updated successfully',
      booking: data
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 