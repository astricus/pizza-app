import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItem } from '../../redux/cart/cart.actions';

import {
  selectCurrencyCoefficient,
  selectCurrencySymbol,
} from '../../redux/menu/menu.selectors';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

export const CollectionItem = ({
  item,
  addItem,
  currencyCoefficient,
  currencySymbol,
}) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>
          {currencySymbol}
          {(price * currencyCoefficient).toFixed(2)}
        </PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currencyCoefficient: selectCurrencyCoefficient,
  currencySymbol: selectCurrencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
