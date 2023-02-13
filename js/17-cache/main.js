'use strict'

caches.open('archivos-estaticos').then(cache =>{
    cache.add("index.html");
});


caches.open('archivos-estaticos2').then(cache =>{
    cache.addAll(["index.html","style.css","main.js"]);
});

caches.open('archivos-estaticos2')
    .then(cache =>{ cache.match("index.html")
        .then(res =>{ console.log(res)});
});

caches.open('archivos-estaticos2')
    .then(cache =>{ cache.match("index.html")
        .then(res =>{ console.log(res)});
}); //En caso de que exista mas d eun index de diferentes paginas de esta manera eleccionamos todos los index

// caches.open('archivos-estaticos2')
//     .then(cache =>{ cache.fetch ("index.html")
//         .then(res =>{ cache.put("index.html",res)});
// });//utilizando el primer metodo de add se podria lograr esto con menos codigo

// caches.open('archivos-estaticos2').then(cache =>{
//     cache.delete(["index.html","style.css","main.js"]);
// });//se puede trabajar con promesa en caso de realizar una accion ya que se alla elimninado
// //tambien existe el valor de keys para estraerr los nombres de los archivos donde se estan almacenando

