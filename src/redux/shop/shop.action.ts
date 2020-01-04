import { ShopActionTypes } from './types';

export const updateCollections = (collecionsMap: any) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collecionsMap
});
