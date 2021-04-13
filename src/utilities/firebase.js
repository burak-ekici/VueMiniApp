import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTdZhrnJdzqgVKYTWc06gb48-ft-KMK0s",
  authDomain: "vueminiapp.firebaseapp.com",
  databaseURL: "https://vueminiapp-default-rtdb.firebaseio.com",
  projectId: "vueminiapp",
  storageBucket: "vueminiapp.appspot.com",
  messagingSenderId: "1004101948411",
  appId: "1:1004101948411:web:ae9c6a1c6ac3e3eee7715e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
