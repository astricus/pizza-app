import React from 'react';
import { CSSTransition } from 'react-transition-group';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <CSSTransition
    appear={true}
    in={true}
    timeout={300}
    classNames="sign-in-animation"
  >
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  </CSSTransition>
);

export default SignInAndSignUpPage;
