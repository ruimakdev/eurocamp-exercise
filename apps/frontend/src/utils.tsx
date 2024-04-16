import React from 'react';
import { Parcs } from './pages/Parcs';
import { SelectableTabs } from './store/appStateStore';
import User from './pages/User';
import Information from './pages/Information';
import { BookingsData } from './store/bookingStore';
import { hardcodedUserId } from './store/userStore';

const PageMapping = {
  parcs: <Parcs />,
  user: <User />,
  information: <Information />,
};

export const selectView = (currentTab: SelectableTabs) => {
  switch (currentTab) {
    case 0:
      return PageMapping.parcs;
    case 1:
      return PageMapping.information;
    case 2:
      return PageMapping.user;
    default:
      return PageMapping.parcs;
  }
};

export const filterBookingsByUserId = (
  bookings: BookingsData[],
  userId: string
): BookingsData[] => {
  return bookings.filter((booking) => booking.user === userId);
};

export const getInitialLetters = (string: string) => {
  const newString = string?.split(' ');
  const firstLetter = string[0];
  const lastLetter = newString?.pop()?.charAt(0);

  return [firstLetter || '', lastLetter || ''];
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
