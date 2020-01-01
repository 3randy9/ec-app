import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Item } from '../../redux/cart/types';

const StripeCheckoutButton: React.FC<Pick<Item, 'price'>> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_mGGjp91NW6KlVkpo2Hnt6VcV00hnrZ7MPV';

  const onToken = ({ token }: any) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      ComponentClass="button"
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
