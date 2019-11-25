import * as React from 'react';
import './collection-item.styles.scss';
import { Item } from '../../pages/shop/shop.component';

type Props = Item

const CollectionItem: React.FC<Props> = props => (
  <li className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    />
    <p className="collection-footer">
      <span className="name">{props.name}</span>
      <span className="price">{props.price}</span>
    </p>
  </li>
);

export default CollectionItem;
