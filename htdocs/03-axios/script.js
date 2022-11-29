// axios("informacion.txt") 
//     .then(res => console.log(res.data));

axios.post("https://reqres.in/api/users", "pedro" ) 
    .then(res => console.log(res));

