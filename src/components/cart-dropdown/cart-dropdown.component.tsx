import * as React from 'react';
import { connect } from 'react-redux';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CheckoutButton
} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../redux/types';
import { Item, CartState } from '../../redux/cart/types';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';

interface Props extends RouteComponentProps {
  cartItems: Item[];
  dispatch: any;
}

const CartDropdown: React.FC<Props> = ({ cartItems, history, dispatch }) => {
  const handleClick = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer id="cart-dropdown">
      {cartItems.length ? (
        <CartItems>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <CheckoutButton type="button" onClick={handleClick}>
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector<
  RootState,
  Pick<CartState, 'cartItems'>
>({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
