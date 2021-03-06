import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  isFetching: false,
  hidden: true,
  deliveryCost: 5,
  cartItems: [],
  currentOrder: null,
  currentUserOrders: null,
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CartActionTypes.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: action.payload,
        error: null,
      };
    case CartActionTypes.PLACE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CartActionTypes.GET_USER_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case CartActionTypes.GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUserOrders: action.payload,
        error: null,
      };
    case CartActionTypes.GET_USER_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
