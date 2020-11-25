import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDy3sxCudnffS4lU2as-ErN6EUhMhe7m7w",
    authDomain: "movie-app-40f16.firebaseapp.com",
    databaseURL: "https://movie-app-40f16.firebaseio.com",
    projectId: "movie-app-40f16",
    storageBucket: "movie-app-40f16.appspot.com",
    messagingSenderId: "909953696227",
    appId: "1:909953696227:web:e890b8dcb315a56d8d20d6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase