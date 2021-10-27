import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNJ5n1tVSaFWub-rjpf7GAWcLJxEOQ_YU",
  authDomain: "disneyplus-clone-rabin.firebaseapp.com",
  projectId: "disneyplus-clone-rabin",
  storageBucket: "disneyplus-clone-rabin.appspot.com",
  messagingSenderId: "48067773740",
  appId: "1:48067773740:web:0f2821aaca4a6f87839889",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
