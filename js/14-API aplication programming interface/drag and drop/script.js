'use strict';
/*
const circulo=document.querySelector('.circulo');
const cuadrado= document.querySelector('.rectangulo');

circulo.addEventListener("dragstart",e=>{
    console.log(e.dataTransfer);
    e.dataTransfer.setData("clase", e.target.className);
});

circulo.addEventListener("drag",()=>{
    console.log("2");
});

circulo.addEventListener("dragend",()=>{
    console.log("3");
});

cuadrado.addEventListener("dragenter",()=>{ console.log("enter");})

cuadrado.addEventListener("dragover",e=>{
    e.preventDefault();//hay que activarlo para poder soltarlo
    console.log("over");})

cuadrado.addEventListener("drop",e=>{
    console.log(e.dataTransfer.getData("clase"));
})

cuadrado.addEventListener("dragleave",()=>{console.log("leave");})*/

const zona=document.querySelector(".zona");
const cantidad_imagenes=document.querySelector(".texturas").children.length+1;

zona.addEventListener("dragover", e =>{
    e.preventDefault();
});

zona.addEventListener("drop", e =>{
    let n=e.dataTransfer.getData("textura");
    zona.style.background=`url(img/textura${n}.png)`;
});

for(let i=1; i<cantidad_imagenes; i++){
    document.querySelector(`.textura${i}`).addEventListener("dragstart", e=>{cambiarTextura(i,e)})
   
}

const cambiarTextura = (i,e) =>{
    e.dataTransfer.setData("textura",i);
}