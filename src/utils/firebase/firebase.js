import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import  { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import { async } from "q";


const firebaseConfig = {
  apiKey: "AIzaSyDordO2fFSOa_XdOStA7yo2v2ciZTeYvZ0",
  authDomain: "nice-etching-240315.firebaseapp.com",
  databaseURL: "https://nice-etching-240315-default-rtdb.firebaseio.com",
  projectId: "nice-etching-240315",
  storageBucket: "nice-etching-240315.appspot.com",
  messagingSenderId: "206960668107",
  appId: "1:206960668107:web:c506610b77160d35069a4e",
  measurementId: "G-RSH65CVN86"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

export const auth = getAuth();
export const signInWithGooglePopoUp = () => signInWithPopup(auth, provider)
export const singInWithGoogleRedirectFunc = async () => {
  const {user} = await signInWithRedirect(auth, provider)
  console.log(user)
}

export const db = getFirestore();

export const createUserDocFromAuth = async (user) => {
  const userDocRef = doc(db, "users", user.uid);

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot)
  if (!userSnapShot.exists()) {
      const {displayName, email} = user;
      const createdAt = new Date();
      
      try {
        await setDoc(userDocRef, {displayName, email, createdAt});
      } catch (error) {
        console.log("Error ", error.message)
      }
      
  }
  return userSnapShot
} 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  console.log("-----------------------", email, password)
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutMethod = async () => await signOut(auth)

export const onAuthStateChangeListner = (callback) => onAuthStateChanged(auth, callback )

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {unsubscribe(); resolve(userAuth)}, reject);
  })
}