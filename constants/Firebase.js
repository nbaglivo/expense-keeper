import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDeGVUfiuCNtkz1AyQi_HWw2K0mYyRrEdw",
    authDomain: "keep-9120d.firebaseapp.com",
    databaseURL: "https://keep-9120d.firebaseio.com",
    storageBucket: "keep-9120d.appspot.com",
    messagingSenderId: "55905809995"
  };

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;