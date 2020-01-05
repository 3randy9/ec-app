import { Item } from '../cart/types';

export const ShopActionTypes = {
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE'
};

export interface FetchCollectionsAction {
  type:
    | typeof ShopActionTypes.FETCH_COLLECTIONS_START
    | typeof ShopActionTypes.FETCH_COLLECTIONS_SUCCESS
    | typeof ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload?: Collections;
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
  collections: Collections | null;
  isFetching: boolean;
  errorMessage: string | undefined;
}

export interface CollectionIdMap {
  hats: 1;
  sneakers: 2;
  jackets: 3;
  womens: 4;
  mens: 5;
}
