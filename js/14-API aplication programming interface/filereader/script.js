'use strict';
const archivo=document.getElementById("archivo");
const resultado=document.querySelector(".resultado");
archivo.addEventListener("change", (e) =>{    
    // leerArchivo(archivo.files[0]);
    leerArchivo(archivo.files);
})

const leerArchivo= ar =>{

    for(let i=0; i<ar.length; i++){//con for of para tenerlo mas optimizado
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load", (e)=>{
            let newImg=`<img src='${e.currentTarget.result}'>`;
            resultado.innerHTML+=newImg;
            
        })
    }


    
    //Multiples archivo de texto recordar poner el multiple en el input para recibir varios parametros
    // for(let i=0; i<ar.length; i++){//con for of para tenerlo mas optimizado
    //     const reader = new FileReader();
    //     reader.readAsText(ar[i]);
    //     reader.addEventListener("load", (e)=>{
    //         console.log(e.currentTarget.result);
    //     })
    // }

    //Para un solo archivo sin ciclo for
    // const reader=new FileReader();
    // reader.readAsText(ar);
    // reader.addEventListener("load", (e)=>{
    //     console.log(e);
    //     console.log(e.currentTarget.result)
    // });
}

const reader=new FileReader();