import { createSelector } from 'reselect';
import { RootState } from '../types';
import { Collections } from '../shop/types';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections
      ? Object.keys(collections).map(
          (key: keyof Collections) => collections[key]
        )
      : []
);

export const selectCollection = (collectionUrlParams: keyof Collections) =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParams] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
