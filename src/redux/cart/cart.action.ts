import { CartActionTypes, Item } from './types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
