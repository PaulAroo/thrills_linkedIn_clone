import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiENer_SM1vDMVnFyWy3AsFqjIofL8fpQ",
  authDomain: "linkedin-clone-thrills.firebaseapp.com",
  projectId: "linkedin-clone-thrills",
  storageBucket: "linkedin-clone-thrills.appspot.com",
  messagingSenderId: "569350695562",
  appId: "1:569350695562:web:77838f4c529465a405db73",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
