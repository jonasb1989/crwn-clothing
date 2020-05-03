import React from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import CollectionContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import { fecthCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  
  componentDidMount() {
    const { fecthCollectionsStart } = this.props;
    fecthCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer} 
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionContainer}  
        />
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  fecthCollectionsStart: () => dispatch(fecthCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
