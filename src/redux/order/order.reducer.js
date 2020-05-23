import OrderActionTypes from './order.types';

const INITIAL_STATE = {
  isFetching: false,
  currentOrder: null,
  currentUserOrders: null,
  error: null,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: action.payload,
        error: null,
      };
    case OrderActionTypes.PLACE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case OrderActionTypes.GET_USER_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case OrderActionTypes.GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUserOrders: action.payload,
        error: null,
      };
    case OrderActionTypes.GET_USER_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case OrderActionTypes.CLEAR_USER_ORDERS:
      return {
        ...state,
        currentUserOrders: null,
        currentOrder: null,
      };
    default:
      return state;
  }
};

export default orderReducer;
