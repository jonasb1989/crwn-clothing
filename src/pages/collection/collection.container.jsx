import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/withSpinner/with-spinner.component';
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default CollectionContainer;