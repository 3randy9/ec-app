import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.action';
import {
  ClearItemFromCart,
  AddCartItems,
  RemoveItems,
  Item
} from '../../redux/cart/types';
import './checkout-item.styles.scss';

type Props = {
  cartItem: Item;
  clearItem?: (item: Item) => Dispatch<ClearItemFromCart>;
  addItem?: (item: Item) => Dispatch<AddCartItems>;
  removeItem?: (item: Item) => Dispatch<RemoveItems>;
};

const CheckoutItem: React.FC<Props> = ({
  cartItem,
  clearItem,
  addItem,
  removeItem
}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const handleClickClearItem = () => {
    if (clearItem === undefined) return;
    clearItem(cartItem);
  };
  const handleClickAddItem = () => {
    if (addItem === undefined) return;
    addItem(cartItem);
  };
  const handleClickRemoveItem = () => {
    if (removeItem === undefined) return;
    removeItem(cartItem);
  };

  return (
    <ul className="checkout-item">
      <li className="image-container">
        <img src={imageUrl} alt={name} />
      </li>
      <li className="name">{name}</li>
      <li className="quantity">
        <button className="arrow" onClick={handleClickRemoveItem}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={handleClickAddItem}>
          &#10095;
        </button>
      </li>
      <li className="price">{price}</li>
      <li>
        <button
          className="remove-button"
          onClick={handleClickClearItem}
          aria-label="Remove Button"
        >
          &#10005;
        </button>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  ({
    clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
    addItem: (item: Item) => dispatch(addItem(item)),
    removeItem: (item: Item) => dispatch(removeItem(item))
  } as any);

export default connect(null, mapDispatchToProps)(CheckoutItem);
