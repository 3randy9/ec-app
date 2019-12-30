import { createSelector } from 'reselect';
import { RootState } from '../types';
import { Item } from './types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumalatedQuantity: number, cartItem: Item) => {
      return accumalatedQuantity + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((accumalatedQuantity: number, cartItem: Item) => {
    return accumalatedQuantity + cartItem.quantity * cartItem.price;
  }, 0)
);
