import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem: React.FC<any> = ({
  cartItem: { name, price, imageUrl, quantity }
}) => (
  <ul className="checkout-item">
    <li className="image-container">
      <img src={imageUrl} alt={name} />
    </li>
    <li className="name">{name}</li>
    <li className="quantity">{quantity}</li>
    <li className="price">{price}</li>
    <li>
      <button className="remove-button" aria-label="Remove Button">
        &#10005;
      </button>
    </li>
  </ul>
);

export default CheckoutItem;
