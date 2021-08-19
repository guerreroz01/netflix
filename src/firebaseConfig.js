import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9UUXUQaxkW7RbH2yeDjIiRd4OvSDfVO8",
  authDomain: "netflix-6a4b5.firebaseapp.com",
  projectId: "netflix-6a4b5",
  storageBucket: "netflix-6a4b5.appspot.com",
  messagingSenderId: "541840522381",
  appId: "1:541840522381:web:f5e51975b55ea43487b6c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
