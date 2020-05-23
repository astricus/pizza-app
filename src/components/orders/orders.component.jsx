import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Order from '../order/order.component';

import { selectCurrentUserOrders } from '../../redux/order/order.selectors';

export const Orders = ({ orders }) =>
  orders
    ? orders.map((order, idx) => (
        <Order key={order.id} order={order} idx={idx + 1} />
      ))
    : null;

const mapStateToProps = createStructuredSelector({
  orders: selectCurrentUserOrders,
});

export default connect(mapStateToProps)(Orders);
