import React from 'react';
import styled from 'styled-components';

// Define the props type
interface ErrorComponentProps {
  message: string;
}

const ErrorContainer = styled.div`
  background-color: #ffcccc;
  color: #cc0000;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorComponent;
