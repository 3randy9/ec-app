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
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemContainer,
  ItemQuantityContainer,
  RemoveButton
} from './checkout-item.styles';

type HandleClick = (item: Item) => void;

type Props = {
  cartItem: Item;
  clearItem: HandleClick;
  addItem: HandleClick;
  removeItem: HandleClick;
};

const CheckoutItem: React.FC<Props> = ({
  cartItem,
  clearItem,
  addItem,
  removeItem
}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const handleClickClearItem = () => clearItem(cartItem);
  const handleClickAddItem = () => addItem(cartItem);
  const handleClickRemoveItem = () => removeItem(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemContainer>{name}</ItemContainer>
      <ItemQuantityContainer>
        <button className="arrow" onClick={handleClickRemoveItem}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={handleClickAddItem}>
          &#10095;
        </button>
      </ItemQuantityContainer>
      <ItemContainer>{price}</ItemContainer>
      <li>
        <RemoveButton
          className="remove-button"
          onClick={handleClickClearItem}
          aria-label="Remove Button"
        >
          &#10005;
        </RemoveButton>
      </li>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<ClearItemFromCart | AddCartItems | RemoveItems>
) => ({
  clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
