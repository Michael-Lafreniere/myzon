import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDtDKSEBAkjT5NS7tFvEVW89W4DvXKEjw4',
  authDomain: 'myzon-3b15e.firebaseapp.com',
  databaseURL: 'https://myzon-3b15e.firebaseio.com',
  projectId: 'myzon-3b15e',
  storageBucket: 'myzon-3b15e.appspot.com',
  messagingSenderId: '103538183451',
  appId: '1:103538183451:web:e24c07cf68c63b9a4517be',
  measurementId: 'G-BFCXWKT20X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
