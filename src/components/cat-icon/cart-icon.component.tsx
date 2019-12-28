import * as React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const CartIcon: React.FC = ({ toggleCartHidden, hidden }: any) => (
  <button
    className="cart-icon"
    aria-haspopup="true"
    aria-expanded={hidden}
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count" aria-label="cart items count">
      0
    </span>
  </button>
);

const mapStateToProps = ({ cart: { hidden } }: any) => ({
  hidden
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
