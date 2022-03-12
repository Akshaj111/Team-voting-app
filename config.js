import firebase from 'firebase';
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDdEUzekVGzWu1yjkbxAcp7IBmg3-Zs7Lk",
    authDomain: "team-voting-app-2b64c.firebaseapp.com",
    projectId: "team-voting-app-2b64c",
    storageBucket: "team-voting-app-2b64c.appspot.com",
    messagingSenderId: "684686634918",
    appId: "1:684686634918:web:76cdc1d9716d8e31b9e967"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();