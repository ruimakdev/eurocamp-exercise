import React from 'react';
import styled from 'styled-components';
import { useAppStateStore } from '../store/appStateStore';

const NavigationBackground = styled.div`
  background-color: rgb(130, 190, 33); /* Green color */
  margin: 0 -5vw; /* Negative margin to extend the green background to the full width */
`;

const NavigationBarContainer = styled.div`
  padding: 0;
  display: flex;
  height: 50px;
  margin: 0 5vw; /* Add margin to both sides */
`;

const NavButton = styled.button`
  background-color: transparent; /* Transparent background */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  margin-right: 10px; /* Add margin between buttons */
  color: #fff;
  font-size: 14px;
  line-height: 1.75;
`;

const NavigationBar = () => {
  const { selectTab } = useAppStateStore();

  return (
    <NavigationBackground>
      <NavigationBarContainer>
        <NavButton
          onClick={() => {
            selectTab(0);
          }}
        >
          Parcs
        </NavButton>
        <NavButton
          onClick={() => {
            selectTab(1);
          }}
        >
          Information
        </NavButton>
      </NavigationBarContainer>
    </NavigationBackground>
  );
};

export default NavigationBar;
