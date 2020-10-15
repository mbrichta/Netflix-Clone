import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBSMns4UWWyX63gOUtFyIh9NSDUas3byso",
    authDomain: "netflix-clone-b5bae.firebaseapp.com",
    databaseURL: "https://netflix-clone-b5bae.firebaseio.com",
    projectId: "netflix-clone-b5bae",
    storageBucket: "netflix-clone-b5bae.appspot.com",
    messagingSenderId: "953208314865",
    appId: "1:953208314865:web:c1d87e16badcc940d60250",
    measurementId: "G-RLG679GK17"
}

const firebase = Firebase.initializeApp(config)


export { firebase }