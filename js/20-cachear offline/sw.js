'use strict'
let version ="verion 4";
 
self.addEventListener("install", e=>{
    console.log("Instalando service worker");

    caches.open(version).then(cache=>{
        cache.add("index.html").then(res=>{
            console.log("Informacion cacheada");
        }).catch(e =>{ console.log(e);})
    })
});

self.addEventListener('activate', ()=>{
    caches.keys().then(key=>{ 
        return Promise.all(
            key.map(cache=>{
                if(cache!== version){
                    console.log("cache antiguo, elimninado");
                    return caches.delete(cache);
                }
            })
        )
     })
});

self.addEventListener('error',()=>{});
//Marca error pero el codigo esta correcto
self.addEventListener('fetch', e =>{
      e.respondWith(async () => {
        const respuestaEnCache= await caches.match(e.request);
        if(respuestaEnCache) return respuestaEnCache;
        return e.request;
      })
});

self.addEventListener('message',e=>{
    console.log('se ha recibido el siguiente mensaje: ');
    console.log(e.data);
    e.source.postMessage("hola brother desde el service worker")
})



