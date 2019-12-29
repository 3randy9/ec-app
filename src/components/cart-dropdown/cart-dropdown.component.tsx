import * as React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { RootState } from '../../redux/types';
import { CartState } from '../../redux/cart/types';
import { selectCartItems } from '../../redux/cart/cart.selectors';

type Props = Pick<CartState, 'cartItems'>;

const CartDropdown: React.FC<Props> = ({ cartItems }) => (
  <div id="cart-dropdown" className="cart-dropdown">
    {cartItems === [] ? (
      <p style={{ textAlign: 'center' }}>Your cart is empty</p>
    ) : (
      <ul className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </ul>
    )}
    <CustomButton type="button" onClick={() => {}}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
