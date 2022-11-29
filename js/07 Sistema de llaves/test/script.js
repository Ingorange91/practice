/*const titulo=document.querySelector(".titulo");
titulo.style.color="red";
titulo.style.backgroundColor="purple";
*/

// const contenedor= document.querySelector(".contenedor");
// const item = document.createElement("LI");
// // const textDelItem= document.createTextNode("Este es un item dentro del li");
// // item.appendChild(textDelItem);


// // item.innerHTML="Este es un item de la lista"
// // contenedor.appendChild(item);


// const fragmento=document.createDocumentFragment();

// for(i=0; i<15;i++){
//     const item= document.createElement("LI");
//     item.innerHTML="Este es un item d ela lista";
//     fragmento.appendChild(item)
// }

// contenedor.appendChild(fragmento);


/*oooooooooooooooooooooooooooooooooooooooooooooooooooooo*/

//La diferencia entre los firstchild y last child a diferencia de firstElementChild es que este omite los espacios y el primero los toma en cuenta



const contenedor=document.querySelector(".contenedor");
const hijo=contenedor.firstElementChild;
console.log(hijo);
