import React from 'react';
import PriceContainer from '../price/price.component';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles';

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x <PriceContainer price={price} />
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
