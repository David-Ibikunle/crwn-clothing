import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAY6TByVlrhzNbAvOO11Um1XpwJu2otIcM",
  authDomain: "crwn-clothing-de69c.firebaseapp.com",
  projectId: "crwn-clothing-de69c",
  storageBucket: "crwn-clothing-de69c.appspot.com",
  messagingSenderId: "386404590987",
  appId: "1:386404590987:web:1ead38b14ee842b04efb8e",
  measurementId: "G-H4Z8P17KFB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;