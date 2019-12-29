import { createSelector } from 'reselect';
import { RootState } from '../types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumalatedQuantity: number, cartItem: any) => {
      if (cartItem.quantity !== undefined) {
        return accumalatedQuantity + cartItem.quantity;
      }
    }, 0)
);
