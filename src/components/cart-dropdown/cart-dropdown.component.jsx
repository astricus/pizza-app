import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectCartHidden,
} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles';

export const CartDropdown = ({ cartItems, hidden, history, dispatch }) => (
  <CSSTransition
    in={!hidden}
    timeout={200}
    classNames="cart-dropdown-animation"
  >
    <CartDropdownContainer
      style={hidden ? { display: 'none' } : { display: 'flex' }}
    >
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          if (cartItems.length) history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  </CSSTransition>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
