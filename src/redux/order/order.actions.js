import OrderActionTypes from './order.types';

export const placeOrderStart = (orderData) => ({
  type: OrderActionTypes.PLACE_ORDER_START,
  payload: orderData,
});

export const placeOrderSuccess = (order) => ({
  type: OrderActionTypes.PLACE_ORDER_SUCCESS,
  payload: order,
});

export const placeOrderFailure = (error) => ({
  type: OrderActionTypes.PLACE_ORDER_FAILURE,
  payload: error,
});

export const getUserOrdersStart = () => ({
  type: OrderActionTypes.GET_USER_ORDERS_START,
});

export const getUserOrdersSuccess = (orders) => ({
  type: OrderActionTypes.GET_USER_ORDERS_SUCCESS,
  payload: orders,
});

export const getUserOrdersFailure = (error) => ({
  type: OrderActionTypes.GET_USER_ORDERS_FAILURE,
  payload: error,
});

export const clearUserOrders = () => ({
  type: OrderActionTypes.CLEAR_USER_ORDERS,
});
