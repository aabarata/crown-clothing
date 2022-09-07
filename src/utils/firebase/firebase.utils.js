// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signWithGooglePopup = () => signInWithPopup(auth, provider);
