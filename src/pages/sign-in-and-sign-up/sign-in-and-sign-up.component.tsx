import React from 'react';
import { SignPageContainer } from './sign-in-and-sign-up.styles';
import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <SignPageContainer>
    <Signin />
    <SignUp />
  </SignPageContainer>
);

export default SignInAndSignUpPage;
