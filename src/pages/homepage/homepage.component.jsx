import React from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  HomePageContainer,
  HomePageTitle,
  HomePageSloganContainer,
  HomePageSlogan,
  HomePageSloganTemp,
  HomePageCTA,
} from './homepage.styles';

const HomePage = () => (
  <CSSTransition
    appear={true}
    in={true}
    timeout={300}
    classNames="homepage-animation"
  >
    <HomePageContainer>
      <HomePageTitle>Pizza Online Ordering Application</HomePageTitle>
      <HomePageSloganContainer>
        <HomePageSlogan>A moment of pleasure at...</HomePageSlogan>
        <HomePageSloganTemp>425&deg;</HomePageSloganTemp>
        <HomePageCTA href="/menu">Order now</HomePageCTA>
      </HomePageSloganContainer>
    </HomePageContainer>
  </CSSTransition>
);

export default HomePage;
