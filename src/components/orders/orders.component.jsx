import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Order from '../order/order.component';

import { selectCurrentUserOrders } from '../../redux/order/order.selectors';

import {
  OrdersPageContainer,
  OrdersPageHeader,
  OrdersPageText,
} from './orders.styles';
import { selectCurrentUser } from '../../redux/user/user.selectors';

export const Orders = ({ orders, currentUser }) => (
  <OrdersPageContainer>
    <OrdersPageHeader>User: {currentUser.displayName}</OrdersPageHeader>
    <OrdersPageText>Total orders: {orders ? orders.length : 0}</OrdersPageText>
    {orders
      ? orders.map((order, idx) => (
          <Order key={order.id} order={order} idx={idx + 1} />
        ))
      : null}
  </OrdersPageContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  orders: selectCurrentUserOrders,
});

export default connect(mapStateToProps)(Orders);
