import firebase from 'firebase'
import 'firebase/firestore'

     // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD16OnKaB9Gnvtss4SP6NCde3iWoqvKDb8",
    authDomain: "vuejs-20350.firebaseapp.com",
    databaseURL: "https://vuejs-20350.firebaseio.com",
    projectId: "vuejs-20350",
    storageBucket: "vuejs-20350.appspot.com",
    messagingSenderId: "853187679648",
    appId: "1:853187679648:web:99f8d08c6f09ab279b40c5",
    measurementId: "G-37LWFECSY1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  
 const db = firebase.firestore();
 db.settings({timestampsInSnapshots: true});
 export default db;

