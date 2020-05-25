import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #eeeeee;
  background-color: white;
  top: 70px;
  right: 0px;
  z-index: 5;

  button {
    margin-bottom: 0;
  }
  @media screen and (max-width: 800px) {
    top: 60px;
  }

  &.cart-dropdown-animation-enter {
    opacity: 0;
  }
  &.cart-dropdown-animation-enter-active {
    opacity: 1;
    transition: opacity 200ms ease;
  }
  &.cart-dropdown-animation-exit {
    display: flex !important;
    opacity: 1;
  }
  &.cart-dropdown-animation-exit-active {
    display: flex !important;
    opacity: 0;
    transition: opacity 200ms ease;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

CartDropdownButton.displayName = 'CartDropdownButton';

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

EmptyMessageContainer.displayName = 'EmptyMessageContainer';

export const CartItemsContainer = styled.div`
  height: 240px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
