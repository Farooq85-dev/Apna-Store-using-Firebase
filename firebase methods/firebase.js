//FireStore Initialize App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

//FireStoreAuthentication CDN
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup, sendEmailVerification, signOut, onAuthStateChanged, deleteUser,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

//Cloud Firestore Database CDN
import { getFirestore, doc, setDoc, onSnapshot, deleteDoc, } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

//FireStore Storage CDN
import {
    getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

//Security FireBase 
const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();
const googleProvider = new GoogleAuthProvider();

//Exporting methods
export {
    createUserWithEmailAndPassword,
    auth,
    signInWithEmailAndPassword,
    signInWithPopup,
    googleProvider,
    GoogleAuthProvider,
    sendEmailVerification,
    signOut,
    onAuthStateChanged,
    deleteUser,
    storage,
    ref,
    uploadBytes, uploadBytesResumable,
    getDownloadURL,
    doc, setDoc,
    db,
    onSnapshot,
    deleteDoc,
    deleteObject,
}