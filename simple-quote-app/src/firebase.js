import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDqpJjGZngXu94UGZvKOhVHWieVtioyK08",
    authDomain: "quote-of-the-day-34f3a.firebaseapp.com",
    databaseURL: "https://quote-of-the-day-34f3a.firebaseio.com",
    projectId: "quote-of-the-day-34f3a",
    storageBucket: "quote-of-the-day-34f3a.appspot.com",
    messagingSenderId: "781183031044"
  };
  firebase.initializeApp(config);

export default firebase;