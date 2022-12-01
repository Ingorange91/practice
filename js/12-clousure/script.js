'use strict';
const cambiarTamaño= tamaño =>{
    // document.querySelector(".texto").style.fontSize=`${tamaño}px`; sin clausula

    //Con clausula
    return ()=>{
        document.querySelector(".texto").style.fontSize=`${tamaño}px`;
    }
}
//Sin clausula
// document.querySelector(".t12").addEventListener("click", ()=> cambiarTamaño(12));
// document.querySelector(".t14").addEventListener("click", ()=> cambiarTamaño(14));
// document.querySelector(".t16").addEventListener("click", ()=> cambiarTamaño(16));


//Con clausula
let px12=cambiarTamaño(12);
let px14=cambiarTamaño(14);
let px16=cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);



//varios argumentos string
// const texto=(...num)=>{
//     console.log(num);
// }
// texto(12,52,45,85,78,89,65)

//parametro res tiene que ir al final si lleva mas valores tendran que ir antes
const suma=(...num)=>{
    let resultado=0;
    for(let i=0; i<num.length; i++){
        resultado+=num[i];
    }
    console.log(resultado);
}
suma(50+100+50,45,85,47,85,69);
