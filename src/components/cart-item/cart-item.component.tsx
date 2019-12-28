import React from 'react';
import { Item } from '../../redux/cart/types';
import './cart-item.styles.scss';

type Props = { item: Item };

const CartItem: React.FC<Props> = ({
  item: { name, price, imageUrl, quantity }
}) => (
  <li className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </li>
);

export default CartItem;
