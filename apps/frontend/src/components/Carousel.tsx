import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel'; // You may need to install this library
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const UserBookingsCarousel = styled(Carousel)`
  margin: 0 auto;
  border-radius: 25px;
  width: 100%;

  .carousel-track {
    padding: 20px 30px;
    background: #e7e7e7;
  }

  .carousel-track:has(li:first-child:last-child) {
    width: 100%;
  }
  .carousel-item {
    align-content: center;
  }

  .card {
    margin: 0 auto;
  }
`;

interface WrapperComponentProps {
  children: ReactNode;
}

export const StyledCarousel: React.FC<WrapperComponentProps> = ({
  children,
}) => (
  <UserBookingsCarousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={false}
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 3,
        partialVisibilityGutter: 40,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 2,
        partialVisibilityGutter: 30,
      },
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass="carousel-track"
    itemClass="carousel-item"
    slidesToSlide={1}
    swipeable
  >
    {children}
  </UserBookingsCarousel>
);
