import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/types';
import { ShopState, Collections } from '../../redux/shop/types';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import PreviewCollection from '../preview-collection/preview-collection.component';

const CollectionsOverview: React.FC<{ collections: Collections }> = ({
  collections
}) => (
  <CollectionsOverviewContainer>
    <ul className="preview">
      {Object.values(collections).map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </ul>
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector<RootState, ShopState, any>({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps, null)(CollectionsOverview);
