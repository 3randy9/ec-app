import { Item } from '../cart/types';

export const ShopActionTypes = {
  UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'
};

export interface UpdateCollections {
  type: typeof ShopActionTypes.UPDATE_COLLECTIONS;
  payload: Collections;
}

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}

export interface Collections {
  [key: string]: Collection;
  hats: Collection;
  jackets: Collection;
  sneakers: Collection;
  womens: Collection;
  mens: Collection;
}

export interface ShopState {
  collections: Collections;
}

export interface CollectionIdMap {
  hats: 1;
  sneakers: 2;
  jackets: 3;
  womens: 4;
  mens: 5;
}
