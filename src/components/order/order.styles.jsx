import styled from 'styled-components';

export const OrderPageContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const OrderHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 25%;

  &:last-child,
  &:nth-child(3) {
    text-align: right;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
