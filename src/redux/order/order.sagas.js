import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { setCurrentOrder, getUserOrders } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import {
  placeOrderSuccess,
  placeOrderFailure,
  getUserOrdersSuccess,
  getUserOrdersFailure,
} from './order.actions';
import { clearCart } from '../cart/cart.actions';
import { setCurrency } from '../menu/menu.actions';
import {
  selectCartItems,
  selectDeliveryCost,
  selectCartTotal,
} from '../cart/cart.selectors';
import {
  selectCurrencyCoefficient,
  selectCurrencySymbol,
} from '../menu/menu.selectors';
import OrderActionTypes from './order.types';

export function* placeOrder({ payload: orderData }) {
  const cartItems = yield select(selectCartItems);
  const totalPrice = yield select(selectCartTotal);
  const deliveryCost = yield select(selectDeliveryCost);
  const currentUser = yield select(selectCurrentUser);
  const currencyCoefficient = yield select(selectCurrencyCoefficient);
  const currencySymbol = yield select(selectCurrencySymbol);
  const order = {
    ...orderData,
    cartItems,
    totalPrice,
    deliveryCost,
    userId: currentUser ? currentUser.id : null,
    currencyCoefficient,
    currencySymbol,
  };
  try {
    const currentOrderRef = yield setCurrentOrder(order);
    const currentOrderSnapshot = yield currentOrderRef.get();
    const currentOrderId = yield currentOrderSnapshot.id;
    yield put(placeOrderSuccess(currentOrderId));
    yield alert(`Your order #${currentOrderId} has been placed! Thank you!`);
  } catch (error) {
    yield put(placeOrderFailure(error));
  }
}

export function* getUserOrdersFromFirebase() {
  const currentUser = yield select(selectCurrentUser);
  try {
    const orders = yield getUserOrders(currentUser.id);
    yield put(getUserOrdersSuccess(orders));
  } catch (error) {
    yield put(getUserOrdersFailure(error));
  }
}

export function* clearCartAndSetCurrencyAfterOrderSuccess() {
  yield put(clearCart());
  yield put(setCurrency());
}

export function* onPlaceOrderStart() {
  yield takeLatest(OrderActionTypes.PLACE_ORDER_START, placeOrder);
}

export function* onPlaceOrderSuccess() {
  yield takeLatest(
    OrderActionTypes.PLACE_ORDER_SUCCESS,
    clearCartAndSetCurrencyAfterOrderSuccess
  );
}

export function* onGetUserOrdersStart() {
  yield takeLatest(
    OrderActionTypes.GET_USER_ORDERS_START,
    getUserOrdersFromFirebase
  );
}

export function* orderSagas() {
  yield all([
    call(onPlaceOrderStart),
    call(onGetUserOrdersStart),
    call(onPlaceOrderSuccess),
  ]);
}
