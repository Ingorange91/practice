// fetch("https://reqres.in/api/users/2")
//     .then(res => res.text())//.json() y .blob()
//     .then(res=> console.log(res))


//Peticion POST
fetch("https://reqres.in/api/users", {
    method: "POST",
    body:`{"nombre": "ernesto", "Apellido":"Ramirez"
    }`,
    headers: {
        "Content-type" : "application/json",
        "Access-Control-Allow-Origin":  "127.0.0.1"
    }
})  .then(res=> res.json())
    .then(res => console.log(res));