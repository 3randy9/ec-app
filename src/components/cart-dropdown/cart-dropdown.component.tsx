import * as React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { RootState } from '../../redux/types';
import { CartState } from '../../redux/cart/types';

type Props = Pick<CartState, 'cartItems'>;

const CartDropdown: React.FC<Props> = ({ cartItems }) => (
  <div id="cart-dropdown" className="cart-dropdown">
    <ul className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </ul>
    <CustomButton type="button" onClick={() => {}}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
