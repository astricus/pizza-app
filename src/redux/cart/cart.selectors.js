import { createSelector } from 'reselect';
import { selectCurrencyCoefficient } from '../menu/menu.selectors';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectDeliveryCost = createSelector(
  [selectCart, selectCurrencyCoefficient],
  (cart, currencyCoefficient) =>
    (cart.deliveryCost * currencyCoefficient).toFixed(2)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems, selectDeliveryCost, selectCurrencyCoefficient],
  (cartItems, deliveryCost, currencyCoefficient) =>
    cartItems
      .reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity +
          cartItem.quantity * cartItem.price * currencyCoefficient,
        deliveryCost * currencyCoefficient
      )
      .toFixed(2)
);
