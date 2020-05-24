import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 770px;
  display: flex;
  justify-content: space-between;
  margin: 100px auto 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
