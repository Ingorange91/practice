const objeto={
  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: "valor3",
}

const obtenerInformacion= () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(objeto)},3000)
  
  });
}

const mostrarResultado= async ()=>{
  let resultado=await obtenerInformacion();
  console.log(resultado);
}

mostrarResultado();