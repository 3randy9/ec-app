import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import { UserInfo } from 'firebase';
import { Collections } from '../redux/shop/types';

const config = {
  apiKey: 'AIzaSyBlUwYU8phFtWfBM0qCfPPW9pNaZjcW5sc',
  authDomain: 'randy-crwn-db.firebaseapp.com',
  databaseURL: 'https://randy-crwn-db.firebaseio.com',
  projectId: 'randy-crwn-db',
  storageBucket: 'randy-crwn-db.appspot.com',
  messagingSenderId: '719383688509',
  appId: '1:719383688509:web:f02bbb0bd2cacf6e7d0154'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: UserInfo,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc(obj.title);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator: any, collection: any) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
