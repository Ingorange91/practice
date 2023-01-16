'use strict'
const publicaciones= document.querySelector('.publicaciones');

const createPublicationCode = (name, content)=>{
    const container=document.createElement("DIV");    
    const comentarios=document.createElement("DIV");
    const nombre=document.createElement("h3");
    const contenido=document.createElement('p');
    const btnEnviar=document.createElement('INPUT');
    const btnComentario=document.createElement('INPUT')

    container.classList.add('publicacion');
    comentarios.classList.add('comentarios');
    btnComentario.classList.add('comentario');
    btnEnviar.classList.add('enviar');

    btnComentario.setAttribute("placeholder","Introduce un comentario");
    btnEnviar.type="submit";

    nombre.textContent=name;
    contenido.textContent=content;

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;

}

const cargarPublicaciones= num =>{
    
}

// let content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit animi vitae officiis, nesciunt magnam sint fuga distinctio perspiciatis aliquam quae labore tempore! Eveniet est rem nesciunt aliquam aut veritatis?"

// publicaciones.appendChild(createPublicationCode("Ernesto Ramirez", content));








//match media es como los media query paro en javascript 5: nivel maser dalto
// const caja3=document.querySelector('.caja3');
// const cajas=document.querySelectorAll(".caja");

// const verifyVisibility= entries=>{
//     for(const entry of entries){
//         if(entry.isIntersecting) console.log("Se esta viendo la caja", entry.target.textContent);
//     }

//     // const entry=entries[0];
//     // console.log(entry.isIntersecting);
// }

// const observer = new IntersectionObserver(verifyVisibility);
// // observer.observe(caja3);
// for(const caja of cajas){
//     observer.observe(caja);
// }
 
//Sistema de lazy load