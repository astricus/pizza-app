import { all, call } from 'redux-saga/effects';

import { menuSagas } from './menu/menu.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { orderSagas } from './order/order.sagas';

export default function* rootSaga() {
  yield all([
    call(menuSagas),
    call(userSagas),
    call(cartSagas),
    call(orderSagas),
  ]);
}
