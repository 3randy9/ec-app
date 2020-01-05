import React from 'react';
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import { Unsubscribe } from 'firebase';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component<RouteComponentProps> {
  unSubscribeFromAuth: Unsubscribe | null = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync }: any = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer as React.FC}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer as React.FC}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
