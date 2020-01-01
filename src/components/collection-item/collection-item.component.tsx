import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  CollectionItemContainer,
  CollectionFooter,
  CollectionImage,
  AddToCartButton
} from './collection-item.styles';
import { Item, AddCartItems } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem: React.FC<{
  item: Item;
  addItem: (item: Item) => void;
}> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const clickHandle = () => addItem(item);

  return (
    <CollectionItemContainer tabIndex={0}>
      <CollectionImage className="image" imageUrl={imageUrl} />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      <AddToCartButton
        type="button"
        onClick={clickHandle}
        inverted
        tabIndex={0}
      >
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AddCartItems>) => ({
  addItem: (item: Item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
