import React from 'react';
import {
  PreviewCollectionContaier,
  PreviewCollectionTitle,
  PreviewCollectionItems
} from './preview-collection.style';
import { Collection } from '../../redux/shop/types';
import CollectionItem from '../collection-item/collection-item.component';

type Props = Pick<Collection, 'title' | 'items'>;

const PreviewCollection: React.FC<Props> = ({ title, items }) => (
  <PreviewCollectionContaier>
    <PreviewCollectionTitle>{title.toUpperCase()}</PreviewCollectionTitle>
    <PreviewCollectionItems>
      {items
        .filter((item, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewCollectionItems>
  </PreviewCollectionContaier>
);

export default PreviewCollection;
