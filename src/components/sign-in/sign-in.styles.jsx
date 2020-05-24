import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
