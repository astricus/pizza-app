import React from 'react';

import {
  OrderItemContainer,
  ImageContainer,
  TextContainer,
} from './order-item.styles';

export const OrderItem = ({
  cartItem,
  currencySymbol,
  currencyCoefficient,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <OrderItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <TextContainer>
        <span>{quantity}</span>
      </TextContainer>
      <TextContainer>
        <span>
          {currencySymbol}
          {(price * currencyCoefficient).toFixed(2)}
        </span>
      </TextContainer>
    </OrderItemContainer>
  );
};

export default OrderItem;
