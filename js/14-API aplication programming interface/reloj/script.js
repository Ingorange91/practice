'use strict';

//funcion para añadir ceros
const addZeros = n =>{
    //con toString contamos la cantiadd de caracteres ya que de otra forma contara cuando pase el numero 2 y no que tenga dos carcteres
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora=() =>{
    const time=new Date();
    let hora=addZeros(time.getHours())+":";
    let minutes=addZeros(time.getMinutes())+":";
    let seconds=addZeros(time.getSeconds());

    document.querySelector(".hora").textContent=hora;
    document.querySelector(".minutos").textContent=minutes;
    document.querySelector(".segundos").textContent=seconds;

}
actualizarHora()//para que se actualice mientras carga la pagina ya que si no mostrara 00 00 00

//usar librerias para no consumir tantos recursos con setInterval
setInterval(actualizarHora, 1000);