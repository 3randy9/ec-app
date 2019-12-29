import * as React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import {} from 'react-router';
import { Item } from '../../redux/cart/types';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import * as H from 'history';

const CartDropdown: React.FC<{
  cartItems: Item[];
  history: H.History;
  dispatch: any;
}> = ({ cartItems, history, dispatch }) => {
  const handleClick = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <div id="cart-dropdown" className="cart-dropdown">
      {cartItems.length ? (
        <ul className="cart-items">
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </ul>
      ) : (
        <p className="empty-message">Your cart is empty</p>
      )}
      <CustomButton type="button" onClick={handleClick}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
} as any);

export default withRouter(connect(mapStateToProps)(CartDropdown) as any);
