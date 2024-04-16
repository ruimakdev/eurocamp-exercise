import { create } from 'zustand';
import { createBooking, deleteBooking, fetchBookings } from '../api/bookings';
import { filterBookingsByUserId } from '../utils';

export interface BookingsData {
  id: string;
  user: string;
  parc: string;
  bookingdate: string;
  comments: string;
}

export interface NewBookingData {
  user: string;
  parc: string;
  bookingdate: string;
  comments: string;
}

export interface BookingsState {
  bookings: BookingsData[];
  error: string | null;
  fetchAllBookings: () => Promise<void>;

  createBooking: (bookingDetails: NewBookingData) => Promise<void>;
  deleteBooking: (bookingId: string) => Promise<void>;
}

const hardcodedUserIdForBookings = '82238f57-3603-4145-8d45-f006fed867ee';

export const useBookingStore = create<BookingsState>((set, get) => ({
  bookings: [],
  error: null,
  fetchAllBookings: async () => {
    try {
      const bookings = await fetchBookings(); // Call fetchBookings function
      set({
        bookings: filterBookingsByUserId(bookings, hardcodedUserIdForBookings),
        error: null,
      });
    } catch (error) {
      set({ error: 'Failed to fetch bookings' }); // Set error message
    }
  },

  createBooking: async (bookingData) => {
    try {
      const response = await createBooking(bookingData);

      set((state) => ({
        bookings: [...state.bookings, response], // Add the new booking to the state
        error: null,
      }));
    } catch (error) {
      console.error('Error creating booking', error);
      set({ error: 'Failed to create booking' }); // Set error message
    }
  },
  deleteBooking: async (bookingId: string) => {
    try {
      const deletionResponse = await deleteBooking(bookingId);

      if (deletionResponse) {
        set((state: { bookings: any[] }) => {
          const updatedBookings = state.bookings.filter(
            (booking) => booking.id !== bookingId
          );

          return {
            bookings: updatedBookings,
            error: null,
          };
        });
      } else {
        console.error('Unexpected response from server:', deletionResponse);

        set({ error: 'Failed to delete booking' }); // Set error message
      }
    } catch (error) {
      set({ error: 'Failed to delete booking' }); // Set error message
      console.error('Error deleting booking:', error);
    }
  },
}));
