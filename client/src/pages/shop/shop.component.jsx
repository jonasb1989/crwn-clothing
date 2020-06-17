import React, { useEffect, lazy, Suspense } from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";
import { fecthCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionContainer = lazy(() => import('../collection/collection.container'));
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));

const ShopPage = ({ fecthCollectionsStart, match }) => {

  const { path } = match;
  
  useEffect(() => {
    fecthCollectionsStart();
  }, [fecthCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route 
          exact 
          path={`${path}`} 
          component={CollectionsOverviewContainer} 
        />
        <Route 
          path={`${path}/:collectionId`} 
          component={CollectionContainer}  
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fecthCollectionsStart: () => dispatch(fecthCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
