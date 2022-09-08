// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYr-r6lN4VoVOgR0hIgJMe1W_OG_7P6Ys",
  authDomain: "crwn-clothing-db-77887.firebaseapp.com",
  projectId: "crwn-clothing-db-77887",
  storageBucket: "crwn-clothing-db-77887.appspot.com",
  messagingSenderId: "602448456545",
  appId: "1:602448456545:web:56205e052748a396277320",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  //Fetch the doc using the user uid as unique identifier
  const userDocRef = doc(db, "users", userAuth.uid);
  //Get the doc info
  const userSnapshot = await getDoc(userDocRef);
  //If the user (doc) don't exist in the db set him (create a new doc)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userDocRef;
};
