import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
  selectDeliveryCost,
} from '../../redux/cart/cart.selectors';

import { placeOrderStart } from '../../redux/cart/cart.actions';
import { setCurrency } from '../../redux/menu/menu.actions';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './orders.styles';
import { selectCurrencySymbol } from '../../redux/menu/menu.selectors';

export const OrdersPage = ({
  cartItems,
  total,
  deliveryCost,
  currencySymbol,
}) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        DELIVERY: {currencySymbol}
        {deliveryCost}
      </TotalContainer>
      <TotalContainer>
        TOTAL: {currencySymbol}
        {total}
      </TotalContainer>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  deliveryCost: selectDeliveryCost,
  currencySymbol: selectCurrencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  placeOrderStart: (orderData) => dispatch(placeOrderStart(orderData)),
  setCurrency: (currency) => dispatch(setCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
