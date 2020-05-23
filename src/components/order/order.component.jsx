import React from 'react';

import OrderItem from '../order-item/order-item.component';

import {
  OrderPageContainer,
  OrderHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './order.styles';

const Order = ({ order, idx }) => {
  const {
    address,
    cartItems,
    createdAt,
    currencyCoefficient,
    currencySymbol,
    deliveryCost,
    phone,
    totalPrice,
  } = order;
  const dateOptions = { hour: '2-digit', minute: '2-digit' };
  return (
    <OrderPageContainer>
      <TotalContainer>Order {idx}</TotalContainer>
      <OrderHeaderContainer>
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
      </OrderHeaderContainer>
      {cartItems.map((cartItem) => (
        <OrderItem
          key={cartItem.id}
          cartItem={cartItem}
          currencySymbol={currencySymbol}
          currencyCoefficient={currencyCoefficient}
        />
      ))}
      <TotalContainer>
        Created: {createdAt.toLocaleDateString('ru-RU', dateOptions)}
      </TotalContainer>
      <TotalContainer>Phone: {phone}</TotalContainer>
      <TotalContainer>Address: {address}</TotalContainer>
      <TotalContainer>
        Delivery: {currencySymbol}
        {(deliveryCost * currencyCoefficient).toFixed(2)}
      </TotalContainer>
      <TotalContainer>
        Total: {currencySymbol}
        {(totalPrice * currencyCoefficient).toFixed(2)}
      </TotalContainer>
    </OrderPageContainer>
  );
};

export default Order;
