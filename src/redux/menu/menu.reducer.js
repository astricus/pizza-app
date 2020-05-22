import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  currencyCoefficient: 1,
  currencySymbol: '$',
  errorMessage: undefined,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case MenuActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case MenuActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case MenuActionTypes.SET_CURRENCY:
      return {
        ...state,
        currencyCoefficient: action.payload === 'EUR' ? 0.92 : 1,
        currencySymbol: action.payload === 'EUR' ? '€' : '$',
      };
    default:
      return state;
  }
};

export default menuReducer;
