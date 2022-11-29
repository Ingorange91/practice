 class Persona{
      constructor(nombre, instagram){
        this.nombre=nombre;
        this.instagram=instagram;
      }
 }

 const data=[
    ["Lucas Dalto","@soydalto"],
    ["robertico","@robertico"],
    ["rancio ramirez","@rancioramirez"],
    ["camilanesa","@milanesa"],
 ];

 const personas=[];

 let dataLength=data.length;

 for(let i =0; i < dataLength; i++){
    personas[i]= new Persona(data[i][0], data[i][1]);

 }




const obtenerPersona= (id, cb)=>{
    if(personas[id]==undefined){
        cb("No se ha enontado la persona");
    }
    else{
        cb(null, personas[id]);
    }
}
 
obtenerPersona(1,(err,persona)=>{
    if(err){console.log(err);}
    else{console.log(persona.nombre); console.log(persona.instagram); }
});