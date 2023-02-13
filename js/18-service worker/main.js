'use strict'
if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
}


navigator.serviceWorker.ready.then(res=>{res.active.postMessage("hola como estas")})

navigator.serviceWorker.addEventListener("message", e=>{
    console.log("Hemos recibido un mensaje del service worker");
    console.log(e.data);
})

