const materiasHtml=document.querySelector(".materias");


const materias=[
  {
    nombre:"fisica 4",  
    nota:"7",
  },

  {
    nombre:"calculo 3",
    nota:"8",
  },
  
  {
    nombre:"base de datos 3",
    nota:"9",
  },
  
  {
    nombre:"Progamacion 4",
    nota:"7",
  },

  {
    nombre:"matematicas discretas",
    nota:"8",
  }
];

const obtenerMaterias = (id) =>{
  return new Promise((resolve ,reject)=>{
    materia=materias[id];

    if(materia==undefined) reject("La materia no existe");
    else setTimeout(()=>resolve(materia),Math.random()*1400);

  });
}

const devolverMaterias= async ()=>{
  let materia=[];
  let materiasLength=materias.length;
  let materiasagregar;
  for(let i=0;i<materiasLength;i++){
    materia[i]= await obtenerMaterias(i);
    let newHtmlCode=
      `
        <div class="materia">
          <div class="nombre">${materia[i].nombre}</div>
          <div class="nota">${materia[i].nota}</div>
        </div>
      `;
      //materiasHtml.innerHTML+=newHtmlCode;
      materiasHtml.innerHTML+=newHtmlCode;
  }
};



devolverMaterias();

// obtenerMaterias(0).then(res =>{console.log(res);});
// obtenerMaterias(1).then(res =>{console.log(res);});
// obtenerMaterias(2).then(res =>{console.log(res);});
// obtenerMaterias(3).then(res =>{console.log(res);});
// obtenerMaterias(4).then(res =>{console.log(res);});