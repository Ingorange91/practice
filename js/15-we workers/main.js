'use strict'

const worker=new Worker('worker.js');
document.querySelector('.button').addEventListener('click', ()=> ejecutarBucle());
worker.addEventListener("message", e=>{
    console.log(e.data);
})


const ejecutarBucle=()=>{
    worker.postMessage("Que onda bro todo bien");
    setTimeout(()=>{
        worker.terminate()
    },2000)
}




console.log(worker);