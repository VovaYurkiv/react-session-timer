import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyD3Fj64istgIYALrOXMcuC-_0n_Oz-OJ9E",
    authDomain: "test-task-84e1a.firebaseapp.com",
    databaseURL: "https://test-task-84e1a.firebaseio.com",
    projectId: "test-task-84e1a",
    storageBucket: "test-task-84e1a.appspot.com",
    messagingSenderId: "895317200690",
    appId: "1:895317200690:web:ff75f6b1a9d7cb4efd512b"
  }

const base = firebase.initializeApp(firebaseConfig)
var database = firebase.database()
export default base