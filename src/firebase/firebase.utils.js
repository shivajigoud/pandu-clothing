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

export const createUserProfileDocument= async(userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  try{
  const snapShot = await userRef.get();
  console.log("success fetching snapshot",snapShot);
  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err){
      console.log("error creating user", err.message)
    }
  }
  }
  catch(err){
    console.log("error occured during th snapshot fetch",err.message)
  };
  return userRef
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


export default firebase