

import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    
    
        apiKey: "AIzaSyC8SCy7pAGZDXk_7vRk3oL8xUCDwBoB2eI",
        authDomain: "messenger-clone-c5dcd.firebaseapp.com",
        databaseURL: "https://messenger-clone-c5dcd.firebaseio.com",
        projectId: "messenger-clone-c5dcd",
        storageBucket: "messenger-clone-c5dcd.appspot.com",
        messagingSenderId: "246947763030",
        appId: "1:246947763030:web:6e611c1b19ff9815b7bcf7",
        measurementId: "G-5GG7ZVRBHS"
    
      
});

const db = firebaseApp.firestore();

export default db;








/*rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2020, 8, 30);
    }
  }
}*/