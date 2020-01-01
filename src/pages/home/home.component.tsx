import React from 'react';
import { HomePageContainer } from './home.styles';
import Directory from '../../components/directory/directory.component';

const Home: React.FC = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default Home;
