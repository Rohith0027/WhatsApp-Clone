
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBu12-2D38Ww1Cp94V-SEXlRQw6P4pdnYY",
    authDomain: "whatsapp-clone-9eb6a.firebaseapp.com",
    projectId: "whatsapp-clone-9eb6a",
    storageBucket: "whatsapp-clone-9eb6a.appspot.com",
    messagingSenderId: "460973630103",
    appId: "1:460973630103:web:7ca86c6489330959cb3fd2",
    measurementId: "G-V035XXETN6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;