import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import CollectionContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import { fecthCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fecthCollectionsStart, match }) => {

  const { path } = match;
  
  useEffect(() => {
    fecthCollectionsStart();
  }, [fecthCollectionsStart]);

  return (
    <div className="shop-page">
      <Route 
        exact 
        path={`${path}`} 
        component={CollectionsOverviewContainer} 
      />
      <Route 
        path={`${path}/:collectionId`} 
        component={CollectionContainer}  
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fecthCollectionsStart: () => dispatch(fecthCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
