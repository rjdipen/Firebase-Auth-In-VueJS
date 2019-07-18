import firebase from 'firebase';
import 'firebase/firestore';

    var firebaseConfig = {
        apiKey: "AIzaSyDGPWCsTTxJ1E89XXMYqNsqrLx0f8eEsH4",
        authDomain: "vueauth-567f2.firebaseapp.com",
        databaseURL: "https://vueauth-567f2.firebaseio.com",
        projectId: "vueauth-567f2",
        storageBucket: "",
        messagingSenderId: "648701618035",
        appId: "1:648701618035:web:1bc40bf52c469e06"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    export default firebaseApp.firestore();
