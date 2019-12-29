export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART'
};

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export interface SetCartIconFlag {
  type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
}

export interface AddCartItems {
  type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
  payload: Item;
}

export interface RemoveItems {
  type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
  payload: Item;
}

export interface ClearItemFromCart {
  type: typeof CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: Item;
}

export interface CartState {
  hidden: boolean;
  cartItems: Item[];
}

export type CartActionTypes = SetCartIconFlag;
