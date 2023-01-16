//forma antigua de implementarlo ahora se usa fetch aunque esto sirve de alguns maneras

//Soporte para internet explorer
let peticion;
if(window.XMLHttpRequest) peticion=new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");



peticion.addEventListener("load", ()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status==201) {

        respuesta=peticion.response;
    }

    else {

        respuesta="Ocurrio un error no se pudo procesar tu solicitud";
    }
    //console.log("Errores");
    //let res=JSON.parse(respuesta).Nombre;

    console.log(JSON.parse(respuesta));
    
})

//Peticion get
//peticion.open("GET","informacion.txt");
//peticion.send();

//POST
peticion.open("POST","https://reqres.in/api/register");

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");

peticion.send(JSON.stringify({
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}));


