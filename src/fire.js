import firebase from 'firebase'
var config = {
    apiKey:'',
    authDomain:'',
    databaseURL:'',
    storageBucket:'',
    messagingSenderId:''
}
var fire = firebase.initializeApp(config);
export default fire;