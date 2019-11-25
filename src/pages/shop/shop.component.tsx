import * as React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

export type Item = {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collection = {
  id?: number;
  title: string;
  routeName: string;
  items: Item[];
};

type State = {
  collections: Collection[];
};

class ShopPage extends React.Component<State> {
  state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;