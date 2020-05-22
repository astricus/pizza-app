import MenuActionTypes from './menu.types';

export const fetchCollectionsStart = () => ({
  type: MenuActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: MenuActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: MenuActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const setCurrency = (currency) => ({
  type: MenuActionTypes.SET_CURRENCY,
  payload: currency,
});
