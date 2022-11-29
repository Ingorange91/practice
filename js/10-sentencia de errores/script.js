
//Error al no agregar que era una clase
const sendButon=document.querySelector(".test");
const back=document.querySelector(".back");
let modal=document.querySelector(".modal-background");


sendButon.addEventListener("click", ()=>{
     console.log("pruebas");
    let resultado, mensaje;
    try{
    
        prevRes=parseInt(document.getElementById('nota').value);
        if(isNaN(prevRes)){
            throw "Gracioso"
        }
        resultado=verificarAprobacion(prevRes)
    }
    catch(e){
        resultado="sos gracioso";
        mensaje="Intentantes hackerar el sitio";
    }
    abrirModal(resultado,mensaje);
});

back.addEventListener("click", ()=>{
    modal.style.opacity="0";
    modal.style.display="none";
    
    modal.style.animation="desaparecer 1s forwards"
})




const abrirModal=(res,msg)=>{
    document.querySelector(".resultado").innerHTML=res;
    document.querySelector(".mensaje").innerHTML=msg;
    
    modal.style.display="flex";
    modal.style.animation="aparecer 1s forwards"

};

const verificarAprobacion=(pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado="Estas tronado";
        break;
        case 2: resultado="Estas tronado";
        break;
        case 3: resultado="Estas tronado";
        break;
        case 4: resultado="Estas tronado";
        break;
        case 5: resultado="Estas tronado";
        break;
        case 6: resultado="Estas tronado";
        break;
        case 7: resultado="Apenas";
        break;
        case 8: resultado="regular";
        break;
        case 9: resultado="casi perfecto";
        break;
        case 10: resultado="exelencia academica";
        break;
        default: resultado="calificacion desconocida";
        break;
    }
    return resultado;
}
