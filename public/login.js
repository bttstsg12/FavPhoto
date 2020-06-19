var firebaseConfig = {
    apiKey: "AIzaSyAZHD-1TArFeM0CMMc8GhjDhkK_e5Dem0Q",
    authDomain: "favphoto-ad87d.firebaseapp.com",
    databaseURL: "https://favphoto-ad87d.firebaseio.com",
    projectId: "favphoto-ad87d",
    storageBucket: "favphoto-ad87d.appspot.com",
    messagingSenderId: "1000109153430",
    appId: "1:1000109153430:web:80152b99998dfdabc3b6b7",
    measurementId: "G-LRM8XZ42Y5"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();

const login = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(error);
    });
    window.location.href = "photo.html";

}
firebase.auth().signOut().then(function() {
    // Sign-out successful.
}).catch(function(error) {
    // An error happened.
});