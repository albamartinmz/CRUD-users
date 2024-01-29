// Método GET R (read) del CRUD
async function getUsers() { //Pedimos datos a un servidor.
    const result = await fetch("http://localhost:3000/users"); //Llamamos a una api con su endpoint.
    const data = await result.json() //El resultado pasamelo a json, await para que espere xq va a tardar.
    return data 
}
let sectionTag = document.getElementById("user-list")//Seleccionamos la seccion (ahora está vacia) del html por su id.
async function printUsers() { //Función que va a mostrarnos los usuarios.
    let users = await getUsers() //Invocamos a la funcion anterior para que nos devuelva un array de usuarios.
    users.map(user => { //Método para recorrer el array de usuarios, por cada vuelta añade al HTML lo que hay en la función.
        sectionTag.innerHTML = //Añade en la sección vacia del HTML lo siguiente.Con += lo añade por debajo
        //Abrimos comillas invertidas para poder escribir dentro notaciones de javascript.
        `<h3>${user.name}</h3>
        <p>${user.email}</p>
        <button onclick="deleteUser('${user.id}')">Delete</button>` //Por cada nuevo user te crea su botón de delete.
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
    const newUser = {  //De esta forma sólo añade este usuario, habría que nombrarlo de forma genérica.
        "name": "Alba",
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

//Método POST C (CREATE) del CRUD con formulario 
async function createUser() {
    const formUser = document.getElementById("users-form");  

    const newUser = {
        "name": formUser.elements[0].value,
        "email": formUser.elements[1].value
    };

    const result = await fetch(`http://localhost:3000/users`, {
        method:  "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser),
    });
}
