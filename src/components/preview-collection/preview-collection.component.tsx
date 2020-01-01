import React from 'react';
import './preview-collection.style.scss';
import { Collection } from '../../redux/shop/types';
import CollectionItem from '../collection-item/collection-item.component';

type Props = Pick<Collection, 'title' | 'items'>;

const PreviewCollection: React.FC<Props> = ({title, items}) => (
  <section className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <ul className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </ul>
  </section>
);

export default PreviewCollection;
