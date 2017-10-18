import firebase from 'firebase';

require('firebase/firestore');

const config = {
  apiKey: "AIzaSyATAtgPhR4io5-ShsobnD5bic6U2rJRZao",
    authDomain: "openup-8e7d9.firebaseapp.com",
    databaseURL: "https://openup-8e7d9.firebaseio.com",
    projectId: "openup-8e7d9",
    storageBucket: "openup-8e7d9.appspot.com",
    messagingSenderId: "126862670800"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
