import React from 'react';
import styled from 'styled-components';

// Styled title component
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Styled span for the number
const NumberSpan = styled.span`
  font-weight: bold;
  color: #007bff; /* Blue color */
`;

// Styled span for the area
const AreaSpan = styled.span`
  font-style: italic;
  color: #28a745; /* Green color */
  cursor: pointer;
  text-decoration: underline;
`;

const ParcListTitle = ({ number, area }: {number: Number, area: string}) => {
  return (
    <Title>
      Showing <NumberSpan>{`${number}`}</NumberSpan> parcs in{' '}
      <AreaSpan onClick={() => {}}> {area}</AreaSpan>
    </Title>
  );
};

export default ParcListTitle;
