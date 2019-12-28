import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { Item, AddCartItems } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';

type Props = {
  item: Item;
  addItem: (item: Item) => void;
};

const CollectionItem: React.FC<Props> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const clickHandle = () => addItem(item);

  return (
    <li className="collection-item" tabIndex={0}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <p className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </p>
      <CustomButton
        type="button"
        onClick={clickHandle}
        inverted="inverted"
        tabIndex={0}
      >
        Add to cart
      </CustomButton>
    </li>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AddCartItems>) => ({
  addItem: (item: Item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
