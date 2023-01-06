'use strict';
localStorage.setItem("nombre","Ernesto");
//.removeItem
//.getItem
//.clear()


let en=document.querySelector(".en");
let es=document.querySelector(".es");
const modal=document.querySelector(".modal-overlay");

const definirIdioma=()=>{
    en.addEventListener("click", ()=>{
        localStorage.setItem("idioma","ingles");
        cerrarModal();
    })

    es.addEventListener("click", ()=>{
        localStorage.setItem("idioma","español");
        cerrarModal();
    });
}

const cerrarModal=()=>{
    modal.style.animation="desaparecer 1s forwards";
    setTimeout(()=>modal.style.display="none",1000)
}

const idioma=localStorage.getItem("idioma");

if(idioma === null) definirIdioma();
else {
    console.log("El idioma es: ",idioma)
    modal.style.display="none";
}
