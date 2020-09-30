import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAnedFpkpO11qezjCqPSgyr7Mo8EVP5C1o",
    authDomain: "dentalou.firebaseapp.com",
    databaseURL: "https://dentalou.firebaseio.com",
    projectId: "dentalou",
    storageBucket: "dentalou.appspot.com",
    messagingSenderId: "1070386331673",
    appId: "1:1070386331673:web:ec3d93918db2561ddb6a88"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 