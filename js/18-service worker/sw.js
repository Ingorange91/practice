'use strict'
self.addEventListener("install", e=>{
    console.log("Instalando service worker");
});

self.addEventListener('activate', ()=>{
    console.log("El service worker esta activo");
});

self.addEventListener('error',()=>{});

self.addEventListener('fetch',()=>{
    console.log("service worker interceptando peticion");
});

self.addEventListener('message',e=>{
    console.log('se ha recibido el siguiente mensaje: ');
    console.log(e.data);
    e.source.postMessage("hola brother desde el service worker")
})



