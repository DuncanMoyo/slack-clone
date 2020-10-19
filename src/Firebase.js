import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyCfQUPx-vbG7ZuC7DltxBSIPVVdIp-UDIA",
  authDomain: "react-slack-clone-5d711.firebaseapp.com",
  databaseURL: "https://react-slack-clone-5d711.firebaseio.com",
  projectId: "react-slack-clone-5d711",
  storageBucket: "react-slack-clone-5d711.appspot.com",
  messagingSenderId: "436743920808",
  appId: "1:436743920808:web:7241e882fde2df830bb69d",
  measurementId: "G-BKG5XZWG27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase