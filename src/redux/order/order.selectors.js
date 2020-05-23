import { createSelector } from 'reselect';

const selectOrderReducer = (state) => state.order;

export const selectCurrentUserOrders = createSelector(
  [selectOrderReducer],
  (order) => order.currentUserOrders
);
