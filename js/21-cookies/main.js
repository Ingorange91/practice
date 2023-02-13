
const newFecha=dias=>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

const crearCookies=(name, dias) =>{
    const expires= newFecha(dias);
    document.cookie=`${name};expires=${expires}`;
}

//crearCookies("nombre=Orange",2);

const obtenerCokkie= cookiName =>{
    let cookies=document.cookie;
    //console.log("valor de cookies: ",cookies);
    cookies = cookies.split(";");
    console.log("tamaño es",cookies.length);
    
    
    for(let i =0; cookies.length > i; i++){
        cookie=cookies[i].trim();
        if(cookie.startsWith(cookiName)) {return cookie.split("=")[1]}
        else {return "no hay cookies para mostrar";}
    }
}
