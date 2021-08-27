import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBd4umVVlznzmW-I7ADB3cXjsEl2nOH8Dg",
    authDomain: "crwn-db-9995a.firebaseapp.com",
    projectId: "crwn-db-9995a",
    storageBucket: "crwn-db-9995a.appspot.com",
    messagingSenderId: "721477812975",
    appId: "1:721477812975:web:793ec47be98faf1e44d11a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;