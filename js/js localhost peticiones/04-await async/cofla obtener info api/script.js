const btn_getInfo=document.getElementById("getInfo");
const btn_desaprobados=document.getElementById('getInfoDesaprobados');

let aprobados=document.querySelector(".good");
let desaprovados=document.querySelector(".bad");


const getInfo=async()=>{
    try{
        
        resultado = await axios("informacion.txt");
        aprobados.textContent=resultado.data.Aprobados;
        desaprovados.textContent=resultado.data.Desaprobados;

    }catch(e){
        aprobados.textContent="La aPI fallo";
        desaprovados.textContent="La aPI fallo";
    }
}



btn_getInfo.addEventListener("click", getInfo);



//fetch
// const btn_getInfo=document.getElementById("getInfo");

// const aprobados= async() =>{
//     let peticion=await fetch("informacion.txt");
//     let resultado = await peticion.json();
//     console.log(resultado.Aprobados);
    
//     let div=document.createElement("DIV");
//     div.classList.add("Aprobados");
//     div.innerHTML=resultado.Aprobados;
//     document.body.appendChild(div);

// }

// const reprobados= async() =>{
//     let peticion= await fetch("informacion.txt");
//     let resultado= await peticion.json();
//     console.log(resultado.Desaprobados);

//     let div=document.createElement("DIV");
//     div.classList.add("Desaprobado");
//     div.innerHTML=resultado.Desaprobados;
//     document.body.appendChild(div);
// }


//btn_getInfo.addEventListener("click", aprobados);
// btn_desaprobados.addEventListener("click", reprobados);