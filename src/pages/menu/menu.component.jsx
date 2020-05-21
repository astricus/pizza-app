import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/menu/menu.actions';

import Spinner from '../../components/spinner/spinner.component';

import { MenuPageContainer } from './menu.styles';

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

export const MenuPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <MenuPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </MenuPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(MenuPage);
