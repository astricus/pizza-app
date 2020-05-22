import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const setCartFromFirebase = (cartItems) => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems,
});

export const placeOrderStart = (orderData) => ({
  type: CartActionTypes.PLACE_ORDER_START,
  payload: orderData,
});

export const placeOrderSuccess = (order) => ({
  type: CartActionTypes.PLACE_ORDER_SUCCESS,
  payload: order,
});

export const placeOrderFailure = (error) => ({
  type: CartActionTypes.PLACE_ORDER_FAILURE,
  payload: error,
});
