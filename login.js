
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.database();
const login= ()=>{
    window.location.href="photo.html";

    document.getElementById("login").value='';
}