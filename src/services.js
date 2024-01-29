// Método GET R (read) del CRUD
async function getUsers() { //Pedimos datos a un servidor.
    const result = await fetch("http://localhost:3000/users"); //Llamamos a una api con su endpoint.
    const data = await result.json() //El resultado pasamelo a json, await para que espere xq va a tardar.
    return data 
}
let sectionTag = document.getElementById("user-list")//Seleccionamos la seccion del html por su id.
async function printUsers() { //Funcion que va a mostrarnos los usuarios.
    let users = await getUsers() //Invocamos a la funcion anterior para que nosdevuelva un array de usuarios.
    users.map(user => { //Para recorrer el array de usuarios.
        sectionTag.innerHTML += 
        `<h3>${user.name}</h3>
        <p>${user.email}</p>
        <button onclick="deleteUser('${user.id}')">Delete</button>` 
    })
}

//Método DELETE D (delete) del CRUD
async function deleteUser(id) {
    const result = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
    });
    return result
}

//Método POST C (create) del CRUD
async function postUser() {
    const newUser = {
        "name": "$",
        "email": "alba@gmail.com"
    }

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    };

    const result = await fetch(`http://localhost:3000/users`, options)
    return result
}

