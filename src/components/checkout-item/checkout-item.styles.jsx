import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }

  @media screen and (max-width: 400px) {
    min-height: 80px;
    font-size: 16px;
    padding: 10px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 22%;
  padding-right: 15px;

  img {
    width: 100%;
    min-height: 70px;
    object-fit: cover;
  }

  @media screen and (max-width: 400px) {
    img {
      min-height: 50px;
    }
  }
`;

export const TextContainer = styled.span`
  width: 22%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

QuantityContainer.displayName = 'QuantityContainer';

export const RemoveButtonContainer = styled.div`
  width: 12%;
  text-align: right;
  padding-right: 12px;
  cursor: pointer;
`;

RemoveButtonContainer.displayName = 'RemoveButtonContainer';
