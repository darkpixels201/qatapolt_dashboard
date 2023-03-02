
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADdY-lh_TTzG-0j9fO7KGNYBxepra6riY",
    authDomain: "fir-pratice-f1454.firebaseapp.com",
    databaseURL: "https://fir-pratice-f1454-default-rtdb.firebaseio.com",
    projectId: "fir-pratice-f1454",
    storageBucket: "fir-pratice-f1454.appspot.com",
    messagingSenderId: "778494735442",
    appId: "1:778494735442:web:c6c8aac07aad9abf589b8b"
  };
  


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);