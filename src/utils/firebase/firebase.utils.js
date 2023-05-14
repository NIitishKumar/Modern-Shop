import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  WriteBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"
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
const analytics = getAnalytics(firebaseApp);
if (!getApps().length) {
}else{
  //
}


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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesDoc = async () => {
  let x = await (collection(db, 'categories'))
  let item = await getDocs(x);
  const result = item.docs.map(doc => doc.data())
  console.log(item)
  return result
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  console.log(res);
  return res;
};
