import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDgwbll9hSlsbiliaH18MRVYE7x3qbDmtg",
  authDomain: "paw-nder.firebaseapp.com",
  databaseURL: "https://paw-nder.firebaseio.com",
  projectId: "paw-nder",
  storageBucket: "paw-nder.appspot.com",
  messagingSenderId: "918769295297",
  appId: "1:918769295297:web:5ac34a73d9dd67243bd940",
  measurementId: "G-HP3P01MVGG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
