const btn=document.getElementById("Nombre");
const btnRes=document.querySelector('.resultado');
 
const getName = async () =>{
    let peticion= await fetch("informacion.txt");
    let resultado= await peticion.json();
    let HTMLCode=`Nombre: ${resultado.Nombre} edad: ${resultado.Edad}`;
    btnRes.textContent=HTMLCode;
}

btn.addEventListener('click', getName);



const asincrone= document.querySelector("Allbieneelectr");