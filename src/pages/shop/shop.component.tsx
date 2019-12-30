import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/types';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { ShopState } from '../../redux/shop/types';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage: React.FC<ShopState> = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RootState, ShopState>({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
