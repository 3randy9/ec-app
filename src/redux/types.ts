import { UserState } from './user/types';
import { CartState } from './cart/types';
export interface RootState {
  user: UserState;
  cart: CartState;
}
