import  { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fecthCollectionsSuccess,
    fecthCollectionsError,
} from './shop.actions';

import shopActionTypes from './shopt.types';

export function* fecthCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fecthCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fecthCollectionsError(error.message));
    }
};

export function* fecthCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START, 
        fecthCollectionsAsync
    );
};