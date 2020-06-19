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
const imgContainer = document.getElementById('images');
db.ref("photos").on("value", snap => {
    for (let i = 0; i < snap.val().length; i++) {
        const temp = document.createElement('div')
        temp.style.display = "flex"
        temp.style.width = '25%'
        temp.style.flexDirection = "column"
        var image = document.createElement('img')
        image.style.width = "100%"
        image.src = snap.val()[i].url;
        // document.body.appendChild(image);
        temp.appendChild(image)
        const btn = document.createElement('button');
        btn.innerHTML = "fav"
        temp.appendChild(btn)
        imgContainer.appendChild(temp)
    }
})