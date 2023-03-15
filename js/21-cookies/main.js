
const newFecha=dias=>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    //fecha.setTime(fecha.getTime() + (dias*1000*60*8));
    return fecha.toUTCString();
}

const crearCookies=(name, dias) =>{
    const expires= newFecha(dias);
    document.cookie=`${name};expires=${expires}`;
}

//crearCookies("nombre=yugy",2); recordar que cada name o clave de cookie debe ser diferente ya que de otra forma se sobrescribiran los valores
'use strict'
const obtenerCookie= cookiName =>{
  let temp="";
  let todasCookies=document.cookie.split(";");
  for(let i=0; i< todasCookies.length; i++){
    //let res=todasCookies[i].trim();
    let res=todasCookies[i].trim().split("=");
    
    if(cookiName===res[0]){
      temp=res[1];
      if(temp!="") break;
    }
  }
  
  console.log(temp);
  return "No existen cookies con ese nombre";
  
}

//para modificarla solo se reescribe en el metodo document.cookie("nombreexistenteCookie=value; espire valor")
//Para eliminar cookie document.cokie="nombrecookie=value;max-age=0" se borra alos 0 segundos



