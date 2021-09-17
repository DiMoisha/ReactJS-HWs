import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVDF3HmqX64xabwD0zn4DqZv9RAYabLPY",
  authDomain: "chatbook-2de26.firebaseapp.com",
  databaseURL: "https://chatbook-2de26-default-rtdb.firebaseio.com",
  projectId: "chatbook-2de26",
  storageBucket: "chatbook-2de26.appspot.com",
  messagingSenderId: "499887687205",
  appId: "1:499887687205:web:82bfc6eabf54cd61a661cc",
  measurementId: "G-8EQDYV6JFJ"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const auth = firebase.auth();