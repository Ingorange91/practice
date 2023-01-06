'use strict';
const geolocation= navigator.geolocation;

const posicion= pos=>{
    console.log(pos);
}

const err= ()=> console.log(e);

const option= {
    maximumAge:0,
    timeout: 3000,
    enableHeightAccuracy:true

}

geolocation.getCurrentPosition(posicion,err,option);

//investigar watchPosition();