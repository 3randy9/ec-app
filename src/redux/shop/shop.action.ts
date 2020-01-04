import { ShopActionTypes, Collection } from './types';

export const updateCollections = (collecionsMap: Collection) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collecionsMap
});
