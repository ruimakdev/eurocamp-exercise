import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBookingStore } from '../../store/bookingStore';
import { hardcodedUserId } from '../../store/userStore';
import { useParcStore } from '../../store/parcStore';

interface ParcCardType {
  id: string;
  title: string;
  description: string;
  image1Url: string;
  image2Url: string;
  size?: 's' | 'm';
  bookable?: boolean;
}

interface DescriptionProps {
  expanded: boolean;
}

// Styled components

const CardContainer = styled.div<{ size?: 's' | 'm' }>`
  width: ${(props) => (props.size === 's' ? '300px' : 'auto')};
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p<DescriptionProps>`
  color: #666;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? 'unset' : '3')};
  -webkit-box-orient: vertical;
`;

const ExpandButton = styled.button`
  color: #007bff;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  margin-top: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  flex-grow: 1;
`;

const Image = styled.img`
  width: calc(50% - 5px);
  height: auto;
  border-radius: 8px;
  margin-right: 5px;
`;

const PlusSign = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BookButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RatingStars = styled.div`
  color: #f39c12;
  margin-right: 5px;
`;

const Address = styled.div`
  color: #555;
  font-size: 14px;
  margin-top: 10px;
`;

const ParcCard: React.FC<ParcCardType> = ({
  size = 'm',
  bookable = true,
  id,
  title,
  description,
  image1Url,
  image2Url,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { createBooking, deleteBooking } = useBookingStore();
  const { removeParcFromState, fetchAllParcs } = useParcStore();

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleBookButtonClick = () => {
    if (bookable) {
      const stringId = id.toString();
      removeParcFromState(stringId);

      createBooking({
        user: hardcodedUserId,
        parc: stringId,
        bookingdate: Date.now().toString(),
        comments: 'This is a new booking',
      });

    } else {
      deleteBooking(id);
      fetchAllParcs();
    }
  };

  return (
    <CardContainer size={size}>
      <CardContent>
        <BookButton onClick={handleBookButtonClick}>
          {bookable ? 'Book' : 'Cancel'}
        </BookButton>
        <Title>{title}</Title>
        <RatingContainer>
          <RatingStars>⭐⭐⭐⭐</RatingStars>
          <span>4.0 (120 reviews)</span>
        </RatingContainer>
        <Address>1234 Park Avenue, New York, NY</Address>
        <Description expanded={expanded}>{description}</Description>
        {description.length > 100 && (
          <ExpandButton onClick={handleExpand}>
            {expanded ? 'Collapse' : 'Expand'}
          </ExpandButton>
        )}
        <ImageContainer>
          <Image src={image1Url} alt="Park Image 1" />
          <Image src={image2Url} alt="Park Image 2" />
          <PlusSign>+15</PlusSign>
        </ImageContainer>
      </CardContent>
    </CardContainer>
  );
};

export default ParcCard;
