import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqzrrA3wcFffX5WYvfJHo4ibBvaztlP3M",
  authDomain: "disneyplus-clone-77bf9.firebaseapp.com",
  projectId: "disneyplus-clone-77bf9",
  storageBucket: "disneyplus-clone-77bf9.appspot.com",
  messagingSenderId: "546838865097",
  appId: "1:546838865097:web:c16b6027bc959136cc9918",
  measurementId: "G-YC2CZLSSJS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
