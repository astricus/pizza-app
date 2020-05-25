import MenuActionTypes from './menu.types';
import menuReducer from './menu.reducer';

const initialState = {
  collections: null,
  isFetching: false,
  currencyCoefficient: 1,
  currencySymbol: '$',
  errorMessage: undefined,
};

describe('menuReducer', () => {
  it('should return initial state', () => {
    expect(menuReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true if fetchingCollectionsStart action', () => {
    expect(
      menuReducer(initialState, {
        type: MenuActionTypes.FETCH_COLLECTIONS_START,
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      menuReducer(initialState, {
        type: MenuActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems,
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      collections: mockItems,
    });
  });

  it('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
    expect(
      menuReducer(initialState, {
        type: MenuActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: 'error',
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error',
    });
  });
});
