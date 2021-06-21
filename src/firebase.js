import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: {INSERT_HERE_YOUR_API_KEY},
    authDomain: {INSERT_HERE_YOUR_AUTH_DOMAIN},
    projectId: {INSERT_HERE_YOUR_PROJECT_ID},
    storageBucket: {INSERT_HERE_YOUR_STORAGE_BUCKET},
    messagingSenderId: {INSERT_HERE_YOUR_MESSAGING_SENDER_ID},
    appId: {INSERT_HERE_YOUR_APP_ID}
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
 
  var db = firebase.firestore();

  export default db; 