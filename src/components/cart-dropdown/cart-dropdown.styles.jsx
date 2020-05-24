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
