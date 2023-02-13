'use strict'

self.addEventListener("insttall", e=>{
    console.log("Instalando service worker");
});

self.addEventListener('activate', ()=>{
    console.log("El serviceWorker esta activo");
});

self.addEventListener('error', ()=>{});

self.addEventListener('fetch', ()=>{
    console.log("service worker interceptando peticion");
});

self.addEventListener('message', e=>{
    console.log("se ha recibido el siguiente mensaje");
    console.log(e.data);
    e.source.postMessage("hola bro soy el service worker")
});







