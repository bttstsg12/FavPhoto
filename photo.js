console.log('connected');

firebase.database().ref('todos').on('value', snapshot => {
    todo.innerHTML = ' ';
    const data = snapshot.val();

})

const CreatItem = (text, uniqueId) => {
    // const div = document.createElement('div');
    // const img = document.createElement('img')
    // img.src = "url"
    // img.style.width = ""
    // div.appendChild(img)
    // const div1 = document.createElement('div');
    // div.appendChild(div1);
    // const btn = button
    // div1.appendChild(btn)
}