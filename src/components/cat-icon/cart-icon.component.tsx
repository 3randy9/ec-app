import * as React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { Dispatch } from 'redux';
import { SetCartIconFlag } from '../../redux/cart/types';
import { RootState } from '../../redux/types';
import './cart-icon.styles.scss';

const CartIcon: React.FC<{
  toggleCartHidden: () => SetCartIconFlag;
  hidden: boolean;
  itemCount: number;
}> = ({ toggleCartHidden, hidden, itemCount }) => (
  <button
    className="cart-icon"
    aria-haspopup="true"
    aria-expanded={hidden}
    aria-controls="cart-dropdown"
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count" aria-label="cart items count">
      {itemCount}
    </span>
  </button>
);

const mapStateToProps = (state: RootState) => ({
  hidden: state.cart.hidden,
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch: Dispatch<SetCartIconFlag>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
