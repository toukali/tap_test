import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDpSvAtYkV04l_dEvfSBIt1C819hnwDrnA",
    authDomain: "ecotap-2e9fe.firebaseapp.com",
    projectId: "ecotap-2e9fe",
    storageBucket: "ecotap-2e9fe.firebasestorage.app",
    databaseURL: "https://ecotap-2e9fe-default-rtdb.firebaseio.com",
    messagingSenderId: "1054886136292",
    appId: "1:1054886136292:web:c9f5862b30d687de171ff1",
    measurementId: "G-EZHVV5L0MN"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };