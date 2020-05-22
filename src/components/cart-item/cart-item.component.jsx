import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles';
import {
  selectCurrencyCoefficient,
  selectCurrencySymbol,
} from '../../redux/menu/menu.selectors';

export const CartItem = ({
  item: { imageUrl, price, name, quantity },
  currencyCoefficent,
  currencySymbol,
}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x {currencySymbol}
        {(price * currencyCoefficent).toFixed(2)}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

const mapStateToProps = createStructuredSelector({
  currencyCoefficent: selectCurrencyCoefficient,
  currencySymbol: selectCurrencySymbol,
});

export default React.memo(connect(mapStateToProps)(CartItem));
