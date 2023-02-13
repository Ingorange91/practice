'use strict'
const chat=document.querySelector('.chat');
const documentfragment=document.createDocumentFragment();
const inputTxt=document.querySelector('.conversacion');
const btnEnviar=document.querySelector('.btnEnviar');



if(navigator.serviceWorker.register){
    navigator.serviceWorker.register("sw.js")
}


navigator.serviceWorker.addEventListener("message", e=>{
  
    console.log("Hemos recibido un mensaje del service worker");

    console.log(e.data);
    
});


const createHTML= txt=>{
    const message=document.createElement("DIV");
    const p=document.createElement('p');
    //Agregamos estilos
    message.classList.add('message');
    message.classList.add('navegador');
    p.classList.add('texto');
    //agregamos contenido
    p.textContent=txt;
    //agregamos la cadena de hijos
    message.appendChild(p);



    return message;

};

const startConversation= txt =>{

    if(txt!=""){        
        const conv=createHTML(txt);
        documentfragment.appendChild(conv);
        chat.appendChild(documentfragment);
        navigator.serviceWorker.ready.then(res =>{res.active.postMessage(txt)});
    }
};

btnEnviar.addEventListener('click',()=>{
    startConversation(inputTxt.value);    
});


navigator.serviceWorker.addEventListener("message", e=>{
  
    console.log("Hemos recibido un mensaje del service worker");

    console.log(e.data);

    const messageAnswer=document.createElement("DIV");
    const p=document.createElement('p');
    
    messageAnswer.classList.add('message');
    messageAnswer.classList.add('sw');
    p.classList.add('texto');
    messageAnswer.appendChild(p);
    p.textContent=inputTxt.value;

    const Rdocumentfragment=document.createDocumentFragment();
    Rdocumentfragment.appendChild(messageAnswer);
    chat.appendChild(Rdocumentfragment)
    
});




