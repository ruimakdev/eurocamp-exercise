import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useUserStore } from '../store/userStore';
import { useBookingStore } from '../store/bookingStore';
import ParcCard from '../components/Parc/ParcCard';
import { StyledCarousel } from '../components/Carousel';
import ErrorComponent from '../components/Error';
import { getRandomNumber } from '../utils';

// Styled components
const UserContainer = styled.div`
  padding-top: 20px;
`;

const UserInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const UserBookingSection = styled.div`
  margin-bottom: 40px;
`;

const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
`;

const UserInfoText = styled.div`
  margin-top: 5px;
`;

const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const AwardsSection = styled.div`
  align-items: start;
`;

const AwardsContainer = styled.div`
  display: flex;
  background-color: #e3e3e3;
  border-radius: 25px;
`;

const AwardImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 50%;
  overflow: hidden;
`;

const AwardName = styled.span`
  font-size: 14px;
`;

const EditableEmailContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 5px;
  width: 300px;
`;

const EditableEmailText = styled.span`
  flex-grow: 1;
  padding-right: 10px;
  color: #333;
`;

const Icon = styled.i`
  margin-right: 8px;
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #007bff;
`;

const CenteredTitle = styled.h3`
  text-align: center;
`;

const DetailsSection = styled.div``;

const PictureAndNameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const User = () => {
  const { userData, userDataFetched, error: userError } = useUserStore();
  const { bookings, fetchAllBookings, error: bookingError } = useBookingStore();

  useEffect(() => {
    fetchAllBookings();
  }, [fetchAllBookings]);

  const awardData = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/id/35/50/50',
      name: 'Top User',
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/id/31/50/50',
      name: 'Holiday Addict',
    },
    {
      id: 3,
      imgUrl: 'https://picsum.photos/id/65/50/50',
      name: 'Great Guest',
    },
  ];

  return (
    <>
      {userError || bookingError ? (
        <ErrorComponent
          message={userError ? (userError as string) : (bookingError as string)}
        />
      ) : (
        <UserContainer>
          {/* User info section */}
          {userDataFetched && (
            <>
              <UserInfoSection>
                <DetailsSection>
                  <PictureAndNameSection>
                    <UserImage
                      src="https://picsum.photos/id/45/150/150"
                      alt="Profile"
                    />
                    <UserInfoText>{`${userData.name}`}</UserInfoText>
                  </PictureAndNameSection>

                  <EditableEmailContainer>
                    <Icon className="fas fa-home"></Icon>
                    <EditableEmailText>
                      234 Something Road, West Kanye
                    </EditableEmailText>
                    <EditButton>
                      <Icon className="fas fa-edit"></Icon>
                    </EditButton>
                  </EditableEmailContainer>

                  <EditableEmailContainer>
                    <Icon className="fas fa-envelope"></Icon>
                    <EditableEmailText>{userData.email}</EditableEmailText>
                    <EditButton>
                      <Icon className="fas fa-edit"></Icon>
                    </EditButton>
                  </EditableEmailContainer>
                </DetailsSection>
                <AwardsSection>
                  <CenteredTitle>Awards</CenteredTitle>
                  <AwardsContainer>
                    {awardData.map((award) => (
                      <AwardContainer key={award.id}>
                        <AwardImage src={award.imgUrl} alt={award.name} />
                        <AwardName>{award.name}</AwardName>
                      </AwardContainer>
                    ))}
                  </AwardsContainer>
                </AwardsSection>
              </UserInfoSection>

              <UserBookingSection>
                <h3>Future Bookings</h3>
                {
                  bookings.length > 0 ?
                  <StyledCarousel>
                  {bookings.map((booking) => (
                    <ParcCard
                      bookable={false}
                      key={booking.id}
                      size={'s'}
                      id={booking.id}
                      description={booking.comments}
                      title={booking.parc}
                      image1Url={`https://picsum.photos/id/${getRandomNumber(
                        1,
                        80
                      )}/200/100`}
                      image2Url={`https://picsum.photos/id/${getRandomNumber(
                        1,
                        80
                      )}/200/100`}
                    />
                  ))}
                </StyledCarousel> :
                <div>You don't have any bookings yet.</div>
                }

              </UserBookingSection>

              <UserBookingSection>
                <h3>Additional Features</h3>
                <div>
                  <p>Feature 1: Some description here</p>
                  <p>Feature 2: Some description here</p>
                  <p>Feature 3: Some description here</p>
                </div>
              </UserBookingSection>
            </>
          )}
        </UserContainer>
      )}
    </>
  );
};

export default User;
