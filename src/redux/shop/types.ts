import {Item} from '../cart/types'

export interface Collection {
  id?: number;
  title: string;
  routeName: string;
  items: Item[];
};

export interface ShopState {
  collections: Collection[];
};
