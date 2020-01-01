import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { RootState } from '../../redux/types';
import { CollectionIdMap, Collection } from '../../redux/shop/types';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage: React.FC<{ collection: Collection }> = ({
  collection
}) => {
  const { title, items } = collection;

  return (
    <section className="collection-page">
      <h2 className="title">{title}</h2>
      <ul className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (
  state: RootState,
  ownProps: RouteComponentProps<{ collectionId: keyof CollectionIdMap }>
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);
