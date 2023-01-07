"use strict"
const showMenu=document.getElementById("ico__menu");
let menuFlag=true;
const nav=document.querySelector(".nav");



showMenu.addEventListener("click", ()=>{
    if(menuFlag){
        nav.style.transform="translateX(0)";
        menuFlag=false;
    }

    else{
        nav.style.transform="translateX(-150%)";
        menuFlag=true;
    }

});
