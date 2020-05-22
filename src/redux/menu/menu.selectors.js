import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectCollections = createSelector(
  [selectMenu],
  (menu) => menu.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCurrencyCoefficient = createSelector(
  [selectMenu],
  (menu) => menu.currencyCoefficient
);

export const selectCurrencySymbol = createSelector(
  [selectMenu],
  (menu) => menu.currencySymbol
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectMenu],
  (menu) => menu.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectMenu],
  (menu) => !!menu.collections
);
