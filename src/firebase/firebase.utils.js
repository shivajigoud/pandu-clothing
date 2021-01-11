import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCWOROZFc9nZ_6Z5w8mLSLcIx1VxFeYl0I",
    authDomain: "pandu-collections-db.firebaseapp.com",
    projectId: "pandu-collections-db",
    storageBucket: "pandu-collections-db.appspot.com",
    messagingSenderId: "481681600226",
    appId: "1:481681600226:web:fa319ff8e94b0a1620f8bb",
    measurementId: "G-3TMWBH9DYK"
  }
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


export default firebase