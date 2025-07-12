// ./app/actions.ts
"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function recordPurchase(userId: string, videoId: number) {
  if (!userId || !videoId) {
    return { error: "User ID and Video ID are required." };
  }
  const supabase = createClient();
  // FIX: Removed unused 'data' variable
  const { error } = await supabase
    .from('user_purchases')
    .insert([{ user_id: userId, video_id: videoId }]);
  if (error) {
    console.error("Error recording purchase:", error);
    return { error: "Could not record the purchase." };
  }
  revalidatePath('/tutorials');
  return { success: true };
}

interface BookingData {
    name: string;
    email: string;
    phone: string;
    classStyle: string;
    bookingDate: Date;
}

export async function createBooking(formData: BookingData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const bookingDataToInsert = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    class_style: formData.classStyle,
    booking_date: formData.bookingDate.toISOString().split('T')[0],
    user_id: user?.id || null,
  };
  // FIX: Removed unused 'data' variable
  const { error: dbError } = await supabase.from('bookings').insert(bookingDataToInsert);
  if (dbError) {
    console.error('Supabase booking error:', dbError);
    return { error: 'There was an error submitting your booking. Please try again.' };
  }
  try {
    // FIX: Removed unused 'data' variable
    const { error: emailError } = await resend.emails.send({
      from: 'Booking Bot <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: 'New Class Booking Request!',
      html: `<p>Details...</p>`
    });
    if (emailError) {
      console.error('Resend email error:', emailError);
    }
  } catch (error) {
    console.error('Failed to send email:', error);
  }
  revalidatePath('/book');
  return { success: true, error: null };
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(formData: ContactFormData) {
  try {
    // FIX: Removed unused 'data' variable
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `New Message from ${formData.name}: ${formData.subject}`,
      reply_to: formData.email,
      html: `<p>Details...</p>`
    });
    if (error) {
      console.error('Resend contact email error:', error);
      return { error: 'Failed to send message.' };
    }
    return { success: true, error: null };
  } catch (error) {
    console.error('Failed to send message:', error);
    return { error: 'An unexpected error occurred.' };
  }
}