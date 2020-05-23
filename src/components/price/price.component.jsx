import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrencySymbol,
  selectCurrencyCoefficient,
} from '../../redux/menu/menu.selectors';

const PriceContainer = ({ price, currencySymbol, currencyCoefficient }) => (
  <>
    {currencySymbol}
    {(price * currencyCoefficient).toFixed(2)}
  </>
);

const mapStateToProps = createStructuredSelector({
  currencySymbol: selectCurrencySymbol,
  currencyCoefficient: selectCurrencyCoefficient,
});

export default connect(mapStateToProps)(PriceContainer);
