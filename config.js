import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCaBq8g5p96Gi4CvVjl_ob2yLc4kUeYE54",
    authDomain: "barter-system-app-f20b6.firebaseapp.com",
    projectId: "barter-system-app-f20b6",
    storageBucket: "barter-system-app-f20b6.appspot.com",
    messagingSenderId: "65201573897",
    appId: "1:65201573897:web:cb832c7536a20920e1e8d8"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore()