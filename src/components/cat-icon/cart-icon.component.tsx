import * as React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {
  selectCartItemsCount,
  selectCartHidden
} from '../../redux/cart/cart.selectors';
import { Dispatch } from 'redux';
import { RootState } from '../../redux/types';
import { SetCartIconFlag } from '../../redux/cart/types';
import { createStructuredSelector } from 'reselect';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon: React.FC<{
  toggleCartHidden: () => SetCartIconFlag;
  hidden: boolean;
  itemCount: number;
}> = ({ toggleCartHidden, hidden, itemCount }) => (
  <CartIconContainer
    aria-haspopup="true"
    aria-expanded={hidden}
    aria-controls="cart-dropdown"
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className="shopping-icon" />
    <ItemCount aria-label="cart items count">{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector<
  RootState,
  {
    hidden: boolean;
    itemCount: number;
  }
>({
  hidden: selectCartHidden,
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch: Dispatch<SetCartIconFlag>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
