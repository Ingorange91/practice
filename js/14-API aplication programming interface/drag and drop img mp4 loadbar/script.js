'use strict'
const zona=document.querySelector('.zona-arrastre');
const resultado=document.querySelector('.resultado');
var img=document.createElement("IMG");
const reproducir=document.getElementById("play");
const barraCarga=document.querySelector('.barraCarga');

zona.addEventListener("dragover", e =>{
    e.preventDefault();
    changeStyle(e.target, "#444")
});

zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.target, "#888");
});

zona.addEventListener("drop", e=>{
    e.preventDefault();
    changeStyle(e.target,"#888");
    cargarArchivos(e.dataTransfer.files[0]);
    zona.style.border="4px solid #888";
});

const changeStyle = (obj, color)=>{
    obj.style.color=color;
    obj.style.border=`4px dashed ${color}`;
};

const cargarArchivos= ar=>{
    const reader= new FileReader();
    // reader.readAsText(ar); para texto
    //reader.readAsDataURL(ar)imagenes
    reader.readAsArrayBuffer(ar);

    reader.addEventListener("progress",e=>{

        let carga=Math.round(e.loaded/ar.size*100);
        zona.textContent=`${carga}%`;
        barraCarga.style.padding="75px 20px";

        barraCarga.style.width=`${carga/3.6}%`;//No esta tomando esta linea revisarla

    });


    reader.addEventListener("loadend", e=>{
        changeStyle(zona, "#4f9")
    })


    reader.addEventListener("load", e=>{
        let video=new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
        let url=URL.createObjectURL(video);//video
        //let url=URL.createObjectURL(ar); imagenes
        
        //img.setAttribute("src", url); imagenes
        img=document.createElement("VIDEO");//video
        img.setAttribute("src",url)//video
        resultado.appendChild(img)
        img.play();
        
        // resultado.textContent=e.currentTarget.result; para texto

    });
};

