import { UserState } from './user/types';
import { CartState } from './cart/types';
import { DirectoryState } from './directory/types';
import { ShopState } from './shop/types';
export interface RootState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
}
