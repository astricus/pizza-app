import styled from 'styled-components';

export const OrderItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  padding: 10px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 25%;
  padding-right: 15px;
  display: flex;
  align-items: center;

  img {
    width: 50%;
  }

  @media screen and (max-width: 800px) {
    img {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.span`
  width: 25%;

  &:last-child,
  &:nth-child(3) {
    text-align: right;
  }
`;
