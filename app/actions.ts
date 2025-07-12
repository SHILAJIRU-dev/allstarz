// ./app/actions.ts
"use server"; // This directive marks all functions in this file as Server Actions

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { Resend } from 'resend'; // Import the Resend library

// Initialize Resend with the API key from your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Records a video purchase in the database for a given user.
 * This will be used later when we implement payments.
 */
export async function recordPurchase(userId: string, videoId: number) {
  if (!userId || !videoId) {
    return { error: "User ID and Video ID are required." };
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('user_purchases')
    .insert([{ user_id: userId, video_id: videoId }]);

  if (error) {
    console.error("Error recording purchase:", error);
    return { error: "Could not record the purchase." };
  }
  
  revalidatePath('/tutorials');
  return { success: true };
}


/**
 * Defines the structure of the data coming from our booking form.
 */
interface BookingData {
    name: string;
    email: string;
    phone: string;
    classStyle: string;
    bookingDate: Date;
}

/**
 * Creates a new booking record in the database AND sends a notification email.
 */
export async function createBooking(formData: BookingData) {
  const supabase = createClient();
  
  // Check if a user is logged in to associate the booking with their account
  const { data: { user } } = await supabase.auth.getUser();

  // Prepare the data for insertion into the 'bookings' table
  const bookingDataToInsert = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    class_style: formData.classStyle,
    booking_date: formData.bookingDate.toISOString().split('T')[0],
    user_id: user?.id || null,
  };
  
  const { error: dbError } = await supabase.from('bookings').insert(bookingDataToInsert);

  if (dbError) {
    console.error('Supabase booking error:', dbError);
    return { error: 'There was an error submitting your booking. Please try again.' };
  }

  // --- NEW: Send Email Notification ---
  try {
    const { data, error: emailError } = await resend.emails.send({
      from: 'Booking Bot <allstarz_booking@jay1.buzz>', // IMPORTANT: Use an email from your verified Resend domain
      to: ['allstarz_booking@jay1.buzz'], // <-- IMPORTANT: Replace with the email address you want to receive notifications
      subject: 'New Class Booking Request!',
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Class Style:</strong> ${formData.classStyle}</p>
        <p><strong>Requested Date:</strong> ${formData.bookingDate.toLocaleDateString()}</p>
      `
    });

    if (emailError) {
      console.error('Resend email error:', emailError);
      // We don't block the user if email fails, just log the error.
      // The booking is already successfully saved in the database.
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
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <allstarz_booking@jay1.buzz>', // Email from verified Resend domain
      to: ['allstazentertainment@gmail.com'], // IMPORTANT: Replace with the email you want messages sent to
      subject: `New Message from ${formData.name}: ${formData.subject}`,
      reply_to: formData.email, // So you can reply directly to the user
      html: `
        <p>You received a new message from your website's contact form.</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
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