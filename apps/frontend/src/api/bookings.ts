import { NewBookingData } from "../store/bookingStore";

// Define type for the response data
interface BookingsData {
  id: string;
  user: string,
  parc: string;
  bookingdate: string;
  comments: string;
}

// import { baseUrl } from './apiUtils'; // Assuming you have a utility function for the base URL
export const baseUrl = 'http://localhost:3001';

// Function to fetch parcs
export const fetchBookings = async (): Promise<BookingsData[]> => {
  try {
    const response = await fetch(`${baseUrl}/api/1/bookings`);
    if (!response.ok) {
      throw new Error('Failed to fetch bookings');
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

// Function to create a new booking
export const createBooking = async (bookingData: NewBookingData): Promise<BookingsData> => {
  try {
    const response = await fetch(`${baseUrl}/api/1/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error('Failed to create booking');
    }


    const  data  = await response.json();

    return data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const deleteBooking = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`${baseUrl}/api/1/bookings/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Failed to delete booking');
    }

    // Check if the response is JSON or text
    return true
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

