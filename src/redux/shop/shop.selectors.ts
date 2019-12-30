import { createSelector } from 'reselect';
import { RootState } from '../types';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
