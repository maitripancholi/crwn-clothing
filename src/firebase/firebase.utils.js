import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAONbxJFVdK0YLk9iJXuoQ6x2cDE-_GBt4",
    authDomain: "crwn-db-2a065.firebaseapp.com",
    projectId: "crwn-db-2a065",
    storageBucket: "crwn-db-2a065.appspot.com",
    messagingSenderId: "100211123261",
    appId: "1:100211123261:web:88c3c59631f37e0b41b654",
    measurementId: "G-RV9P0DB87Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
