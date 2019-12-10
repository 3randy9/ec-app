import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
