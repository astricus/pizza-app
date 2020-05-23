import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Orders from '../../components/orders/orders.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { getUserOrdersStart } from '../../redux/order/order.actions';

export const OrdersPage = ({ currentUser, getUserOrdersStart }) => {
  useEffect(() => {
    if (currentUser) getUserOrdersStart();
  }, [getUserOrdersStart, currentUser]);

  return <Orders />;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUserOrdersStart: () => dispatch(getUserOrdersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
