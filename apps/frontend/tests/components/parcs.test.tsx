import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ParcCard from '../../src/components/Parc/ParcCard';
import * as bookingStore from '../../src/store/bookingStore';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

jest.mock('../../src/store/bookingStore'); // Mock the booking store

describe('<ParcCard />', () => {
  const mockCreateBooking = jest.fn();
  const mockDeleteBooking = jest.fn();

  // Mock the createBooking and deleteBooking functions
  jest.spyOn(bookingStore, 'useBookingStore').mockReturnValue({
    createBooking: mockCreateBooking,
    deleteBooking: mockDeleteBooking,
  });

  const defaultProps = {
    id: '1',
    title: 'Test Parc',
    description: 'Test description',
    imageUrl1: 'test-image-url',

    imageUrl2: 'test-image-url',
  };

  it('renders correctly', () => {
    render(<ParcCard image1Url={''} image2Url={''} {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByAltText('Park Image 1')).toBeInTheDocument();
  });

  it('calls createBooking when Book button is clicked', () => {
    render(<ParcCard image1Url={''} image2Url={''} {...defaultProps} />);
    const bookButton = screen.getByText('Book');

    fireEvent.click(bookButton);

    expect(mockCreateBooking).toHaveBeenCalledWith({
      user: expect.any(String),
      parc: defaultProps.id.toString(),
      bookingdate: expect.any(String),
      comments: 'This is a new booking',
    });
  });

  it('calls deleteBooking when Book button is clicked on a non-bookable card', () => {
    render(<ParcCard image1Url={''} image2Url={''} {...defaultProps} bookable={false} />);
    const bookButton = screen.getByText('Cancel');

    fireEvent.click(bookButton);

    expect(mockDeleteBooking).toHaveBeenCalledWith(defaultProps.id);
  });
});
