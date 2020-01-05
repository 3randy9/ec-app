import { ShopActionTypes, Collection } from './types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { Dispatch } from 'redux';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap: Collection) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
