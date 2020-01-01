import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import { Item } from '../../redux/cart/types';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';
import { RootState } from '../../redux/types';

const CheckoutPage: React.FC<{ cartItems: Item[]; total: number }> = ({
  cartItems,
  total
}) => (
  <div className="checkout-page">
    <ul className="checkout-header">
      <li className="checkout-block">
        <span>Product</span>
      </li>
      <li className="checkout-block">
        <span>Description</span>
      </li>
      <li className="checkout-block">
        <span>Quantity</span>
      </li>
      <li className="checkout-block">
        <span>Price</span>
      </li>
      <li className="checkout-block">
        <span>Remove</span>
      </li>
    </ul>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <p>TOTAL: ${total}</p>
      <p className="test-warning">
        ※Please use the following test redit card for payments
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
      </p>
      <p>
        <StripeCheckoutButton price={total} />
      </p>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector<
  RootState,
  { cartItems: Item[]; total: number }
>({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
