import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import orderReducer from './order/order.reducer';
import menuReducer from './menu/menu.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  cart: cartReducer,
  menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
