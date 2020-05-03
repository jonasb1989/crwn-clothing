import ShopActionTypes from './shopt.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fecthCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fecthCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fecthCollectionsError = errorMessage => ({
    types: ShopActionTypes.fecthCollectionsError,
    payload: errorMessage,
})


// PARA REDUX THUNK
// DEPRECIADO
export const fecthCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fecthCollectionsStart());
        collectionRef.get().then(snapShot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
          dispatch(fecthCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fecthCollectionsError(error.message)));
    }
}