import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDdW1yml626ouG5bLgmM2gT5ZmDmI2iZFk",
  authDomain: "horustest-67a33.firebaseapp.com",
  databaseURL: "https://horustest-67a33.firebaseio.com",
  projectId: "horustest-67a33",
  storageBucket: "horustest-67a33.appspot.com",
  messagingSenderId: "797963077620",
  appId: "1:797963077620:web:efcacffcd27d684d851ba1",
  measurementId: "G-1F2JPJS08W"
};

firebase.initializeApp(config);
// export const auth = fb.auth;
// export const db = fireabase.database;
export default firebase;
