import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBLm-M-hjnS9x3piyS0kER1fHk-29eptB8',
  authDomain: 'frontend-2ba5a.firebaseapp.com',
  databaseURL: 'https://frontend-2ba5a.firebaseio.com',
  storageBucket: 'frontend-2ba5a.appspot.com',
  messagingSenderId: '793373377314'
};
firebase.initializeApp(config);
export default firebase;
export const database = firebase.database();

// tutorial repo @ https://github.com/stevekinney/react-firebase-first-flight
