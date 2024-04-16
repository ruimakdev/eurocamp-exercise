import React, { useEffect } from 'react';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavBar';
import styled from 'styled-components';
import { useAppStateStore } from './store/appStateStore';
import { selectView } from './utils';
import { useUserStore } from './store/userStore';

const AppContainer = styled.div`
  margin: 0 5vw; /* Add margin to both sides */
`;

const App = () => {
  const { selectedTab } = useAppStateStore();
  const { fetchUserData } = useUserStore();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <AppContainer>
      <TopBar />
      <NavigationBar />
      {selectView(selectedTab)}
    </AppContainer>
  );
};

export default App;
