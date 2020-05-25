import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/menu/menu.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

export const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CSSTransition
      appear={true}
      in={true}
      timeout={300}
      classNames="collection-animation"
    >
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    </CSSTransition>
  );
};

const mapStateToProps = (state) => ({
  collection: selectCollection('pizza')(state),
});

export default connect(mapStateToProps)(CollectionPage);
