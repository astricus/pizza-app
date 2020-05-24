import React from 'react';

import {
  HomePageContainer,
  HomePageTitle,
  HomePageSloganContainer,
  HomePageSlogan,
  HomePageSloganTemp,
  HomePageCTA,
} from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <HomePageTitle>Pizza Online Ordering Application</HomePageTitle>
    <HomePageSloganContainer>
      <HomePageSlogan>A moment of pleasure at...</HomePageSlogan>
      <HomePageSloganTemp>425&deg;</HomePageSloganTemp>
      <HomePageCTA href="/menu">Order now</HomePageCTA>
    </HomePageSloganContainer>
  </HomePageContainer>
);

export default HomePage;
