const buton=document.querySelector(".buton");

//evento borbuja y evento construccion mid level 2:04

// function saludar(){
//     alert("Helo world");
// }
//Tambien se puede llamar directamente a la funcion saludar atravez de la onclick en el html para realizarlo d emanera directa
// buton.addEventListener("click", saludar);

buton.addEventListener("dblclick", (e)=>{
      alert("say HI!!!");
      //e.stopPropagation();//Con este se detiwne la propagacion de eventos menos especificos y solamente se ejecuta como unico
})

//doble click dblclick
//mouseover
