import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import FormInput from '../../components/form-input/form-input.component';
import FormSelect from '../../components/form-select/form-select.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import PriceContainer from '../../components/price/price.component';

import {
  selectCartItems,
  selectCartTotal,
  selectDeliveryCost,
} from '../../redux/cart/cart.selectors';

import { placeOrderStart } from '../../redux/order/order.actions';
import { setCurrency } from '../../redux/menu/menu.actions';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  CheckoutPageContainer,
  CartItemsContainer,
  FormContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './checkout.styles';

export const CheckoutPage = ({
  currentUser,
  cartItems,
  total,
  deliveryCost,
  placeOrderStart,
  setCurrency,
}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: currentUser ? currentUser.displayName : '',
    email: currentUser ? currentUser.email : '',
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
    <CSSTransition
      appear={true}
      in={true}
      timeout={300}
      classNames="checkout-animation"
    >
      <CheckoutPageContainer>
        <CartItemsContainer>
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
            DELIVERY: <PriceContainer price={deliveryCost} />
          </TotalContainer>
          <TotalContainer>
            TOTAL: <PriceContainer price={total} />
          </TotalContainer>
        </CartItemsContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
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
        </FormContainer>
      </CheckoutPageContainer>
    </CSSTransition>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  total: selectCartTotal,
  deliveryCost: selectDeliveryCost,
});

const mapDispatchToProps = (dispatch) => ({
  placeOrderStart: (orderData) => dispatch(placeOrderStart(orderData)),
  setCurrency: (currency) => dispatch(setCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
