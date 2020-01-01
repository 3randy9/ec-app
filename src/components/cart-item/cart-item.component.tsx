import React from 'react';
import { Item } from '../../redux/cart/types';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

type Props = { item: Item };

const CartItem: React.FC<Props> = ({
  item: { name, price, imageUrl, quantity }
}) => (
  <CartItemContainer>
    <img src={imageUrl} alt={name} />
    <ItemDetails>
      <span className="name">{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
