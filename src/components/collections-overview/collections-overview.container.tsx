import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOvreview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
} as any);

const CollectionsOvreviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOvreview);

export default CollectionsOvreviewContainer;
