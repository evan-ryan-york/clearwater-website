import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';
import { emailSubmissionSchema } from '@/lib/validation/emailSchema';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const validation = emailSubmissionSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request data',
          details: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const { email, source, metadata } = validation.data;

    // Get user agent from headers
    const userAgent = request.headers.get('user-agent') || null;

    // Insert into Supabase
    const { data, error } = await supabaseServer
      .from('email_signups')
      .insert([
        {
          email,
          source,
          user_agent: userAgent,
          metadata: metadata || {},
        },
      ])
      .select()
      .single();

    if (error) {
      // Check for unique constraint violation (duplicate email)
      if (error.code === '23505') {
        return NextResponse.json(
          {
            success: false,
            error: 'This email is already registered',
          },
          { status: 409 }
        );
      }

      console.error('Supabase error:', error);
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: 'Email submitted successfully',
      data,
    });
  } catch (error) {
    console.error('Email submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred while submitting your email',
      },
      { status: 500 }
    );
  }
}
