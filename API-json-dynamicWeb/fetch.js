function loadUserData (){
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(json => displayUser(json))
}



function displayUser (json) {
    console.log(json);
    let ul = document.getElementById(`userDisplay`);
    for(const user of json){
        const li = document.createElement(`li`);
        li.innerText = `Users Email: ${user.email}`
        ul.appendChild(li);

    }
    for(const user of json){
        const li = document.createElement(`li`);
        li.innerText =`phone Numbers: ${ user.phone}`
        ul.appendChild(li);

    }


    
}