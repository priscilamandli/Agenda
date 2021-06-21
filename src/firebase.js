import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: {HERE_YOUR_API_KEY},
    authDomain: {HERE_YOUR_AUTH_DOMAIN},
    projectId: {HERE_YOUR_PROJECT_ID},
    storageBucket: {HERE_YOUR_STORAGE_BUCKET},
    messagingSenderId: {HERE_YOUR_MESSAGING_SENDER_ID},
    appId: {HERE_YOUR_APP_ID}
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
 
  var db = firebase.firestore();

  export default db; 