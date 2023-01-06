'use strict';
const IDBRequest=indexedDB.open("ErnestoDB",1);


IDBRequest.addEventListener("upgradeneeded", ()=>{
    const db=IDBRequest.result;
    
    db.createObjectStore("nombres",{
        autoIncrement:true //Puedes utilizar KeyPath asociacion con nombre o letras como ejemplo el rfc
    });

});

IDBRequest.addEventListener("success", ()=>{
    console.log("todo salio correctamente");
});

IDBRequest.addEventListener("error",()=>{
    console.log("A ocurrido un error en la base de datos");
});


document.getElementById('add').addEventListener("click",()=>{
    let nombre=document.getElementById("nombre").value;
    if(nombre.length>0){
        addObjetos({nombre});
        leerObjetos();
    }
    else{alert("El campo no puede estar vacio");}
});


const addObjetos= objeto=>{//si funciona correctamente
    const IDBData=getIDBData("readwrite","Objetos garegados correctamente");
    IDBData.add(objeto);
    
}


const leerObjetos =objeto=>{//sin funciona corractamente
    const IDBData=getIDBData("readonly");
    const cursor=IDBData.openCursor();
    const fragment=document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML="";
    cursor.addEventListener("success", ()=>{
        if(cursor.result){
            let elemento=nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue()
        }
        else document.querySelector(".nombres").appendChild(fragment);
    });
}

const modificarObjetos=(key, objeto)=>{//si funciona correctamente
    const IDBData=getIDBData("readwrite", "objeto modificado correctamente");
    IDBData.put(objeto,key);
   
};

const borrarObjetos=key=>{//funciona correctamente
    const IDBData=getIDBData("readwrite", "Objeto borrado exitosamente");
    IDBData.delete(key);
  
};


const getIDBData=(mode, msg)=>{
    const db=IDBRequest.result;
    const IDBtransaction=db.transaction("nombres",mode);//Se otorgan el tipo de permisos
    const objectStore=IDBtransaction.objectStore("nombres");//Se selecciona el objeto donde se escribira

    IDBtransaction.addEventListener("complete", ()=>{
        console.log(msg);
    });
    return objectStore;
}

const nombresHTML=(id,name)=>{
    const container=document.createElement("DIV");
    const h2=document.createElement("h2");
    const options=document.createElement("DIV");
    const saveButton=document.createElement("button");
    const deleteButton=document.createElement("button");


    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent="Guardar";
    deleteButton.textContent="Eliminar";
    h2.textContent=name.nombres;

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    return container
}