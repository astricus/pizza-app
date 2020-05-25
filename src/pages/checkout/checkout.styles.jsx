import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 90%;
  /* min-height: 90vh; */
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 100px auto 0;

  button {
    margin-left: auto;
  }

  &.checkout-animation-appear {
    opacity: 0;
  }
  &.checkout-animation-appear-active {
    opacity: 1;
    transition: opacity 300ms ease;
  }
`;

export const CartItemsContainer = styled.div`
  width: 60%;
  padding: 0 30px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  margin-top: -48px;
  margin-bottom: 30px;
  width: 40%;
  padding: 0 30px;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  font-size: 16px;
  width: 22%;

  &:last-child {
    width: 12%;
    text-align: right;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
    width: 20%;
  }
`;

export const TotalContainer = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;
