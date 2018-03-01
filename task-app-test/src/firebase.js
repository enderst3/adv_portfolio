import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyA4tJZeAQ_dT5e6120_1hqLsf0MR2ID58A",
    authDomain: "to-do-e0125.firebaseapp.com",
    databaseURL: "https://to-do-e0125.firebaseio.com",
    projectId: "to-do-e0125",
    storageBucket: "to-do-e0125.appspot.com",
    messagingSenderId: "429342622288"
  };
  firebase.initializeApp(config);

  export default firebase
