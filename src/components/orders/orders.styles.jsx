import styled from 'styled-components';

export const OrdersPageContainer = styled.div`
  width: 55%;
  margin: 100px auto 50px;

  @media screen and (max-width: 800px) {
    margin: 70px auto 30px;
    width: 90%;
  }

  &.orders-animation-appear {
    opacity: 0;
  }
  &.orders-animation-appear-active {
    opacity: 1;
    transition: opacity 300ms ease;
  }
`;

export const OrdersPageHeader = styled.h2`
  font-size: 36px;
`;

export const OrdersPageText = styled.p`
  font-size: 16px;
`;
