import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaoxL0wLubNJOAkTehq2GIC18PRqZlXcI",
    authDomain: "crw-db-6c6b8.firebaseapp.com",
    databaseURL: "https://crw-db-6c6b8.firebaseio.com",
    projectId: "crw-db-6c6b8",
    storageBucket: "",
    messagingSenderId: "423401632004",
    appId: "1:423401632004:web:a74e32bb0833e9b88e2051",
    measurementId: "G-MY0RMCEY45"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

