import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { RootState } from '../../redux/types';
import { CollectionIdMap, Collection } from '../../redux/shop/types';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems
} from './collection.styles';

const CollectionPage: React.FC<{ collection: Collection }> = ({
  collection
}) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
};

const mapStateToProps = (
  state: RootState,
  ownProps: RouteComponentProps<{ collectionId: keyof CollectionIdMap }>
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);
