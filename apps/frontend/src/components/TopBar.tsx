import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppStateStore } from '../store/appStateStore';
import { useUserStore } from '../store/userStore';
import { getInitialLetters } from '../utils';

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 60px;
  border-bottom: 2px solid #eeeeee;
`;

const Logo = styled.img`
  height: 40px; /* Adjust height as needed */
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserName = styled.div`
  margin-right: 10px;
`;

const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserIconText = styled.span`
  color: #fff;
  font-size: 18px;
`;

const TopBar = () => {
  const { selectTab } = useAppStateStore();
  const { userData } = useUserStore();

  const [initialLetters, setInitialLetters] = useState(['', '']);
  useEffect(() => {
    if (userData.name) {
      setInitialLetters(getInitialLetters(userData.name));
    }
  }, [userData]);

  return (
    <TopBarContainer>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eurocamp_Logo.svg/1200px-Eurocamp_Logo.svg.png"
        alt="Logo"
      />
      <div></div> {/* Spacer */}
      <ProfileContainer>
        <UserIcon
          onClick={() => {
            selectTab(2);
          }}
        >
          <UserIconText>{`${initialLetters[0]}${initialLetters[1]}`}</UserIconText>
        </UserIcon>
      </ProfileContainer>
    </TopBarContainer>
  );
};

export default TopBar;
