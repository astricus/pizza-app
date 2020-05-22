import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import FormInput from '../../components/form-input/form-input.component';
import FormSelect from '../../components/form-select/form-select.component';
import CustomButton from '../../components/custom-button/custom-button.component';

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
} from './checkout.styles';
import { selectCurrencySymbol } from '../../redux/menu/menu.selectors';

export const CheckoutPage = ({
  cartItems,
  total,
  deliveryCost,
  placeOrderStart,
  setCurrency,
  currencySymbol,
}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    phone: '',
    address: '',
    currency: 'USD',
  });

  const { displayName, email, phone, address, currency } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    placeOrderStart({ displayName, email, phone, address });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    if (name === 'currency') setCurrency(value);
  };

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
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          label="Phone"
          required
        />
        <FormInput
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          label="Address"
          required
        />
        <FormSelect
          name="currency"
          value={currency}
          onChange={handleChange}
          label="Currency"
        />
        <CustomButton type="submit">PLACE ORDER</CustomButton>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
