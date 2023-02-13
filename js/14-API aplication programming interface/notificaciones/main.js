'use strict'

if(!('Notification' in window)){
    console.log("Las notificaciones no estan disponibles");
}

Notification.requestPermission(() =>{
    if(Notification.permission=='granted') 
    {
        new Notification('suscribete');
    }
});