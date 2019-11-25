import * as React from 'react';
import './preview-collection.style.scss';
import { Collection } from '../../pages/shop/shop.component';
import CollectionItem from '../collection-item/collection-item.component'

type Props = Collection

const PreviewCollection: React.FC<Props> = props => (
  <section className="preview-collection">
    <h1 className="title">{props.title.toUpperCase()}</h1>
    <ul className="preview">
      {props.items
        .filter((item, i) => i < 4)
        .map(({id, ...itemProps}) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </ul>
  </section>
);

export default PreviewCollection;
