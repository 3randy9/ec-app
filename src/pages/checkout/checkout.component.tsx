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
import {
  CheckoutPageContainer,
  CheckoutPageHead,
  CheckoutPageBlock,
  CheckoutPageTotal,
  WarningText
} from './checkout.styles';
import { RootState } from '../../redux/types';

const CheckoutPage: React.FC<{ cartItems: Item[]; total: number }> = ({
  cartItems,
  total
}) => (
  <CheckoutPageContainer>
    <CheckoutPageHead>
      <CheckoutPageBlock>
        <span>Product</span>
      </CheckoutPageBlock>
      <CheckoutPageBlock>
        <span>Description</span>
      </CheckoutPageBlock>
      <CheckoutPageBlock>
        <span>Quantity</span>
      </CheckoutPageBlock>
      <CheckoutPageBlock>
        <span>Price</span>
      </CheckoutPageBlock>
      <CheckoutPageBlock>
        <span>Remove</span>
      </CheckoutPageBlock>
    </CheckoutPageHead>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <CheckoutPageTotal>
      <p>TOTAL: ${total}</p>
      <WarningText>
        ※Please use the following test redit card for payments
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
      </WarningText>
      <p>
        <StripeCheckoutButton price={total} />
      </p>
    </CheckoutPageTotal>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector<
  RootState,
  { cartItems: Item[]; total: number }
>({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
