const obtenerInformacion = (materia)=>{

    materias={
        fisica:["Ramirez", "pedro", "cofla", "maria", "kristy", "unico"],
        programacion:["Lomeli",  "pepito", "cofla", "ernesto", "kristy"],
        logica:["Arcano",  "pepito", "maria", "ernesto", "kristy"],
        quimica:["Ester", "pedro", "pepito", "maria", "ernesto", "kristy"]
    }

    if(materias[materia] !== undefined){
        return  [materias[materia], materia, materias];
    }
    else{return materias}
}

const mostrarInformacion=(materia) =>{
    let informacion=obtenerInformacion(materia);

    if(informacion!==false){
        let profesor= obtenerInformacion(materia)[0][0];
        let alumnos= obtenerInformacion(materia)[0];
        alumnos.shift();

        document.write(`El profesor de  ${informacion[1]} es ${profesor} y los alumnos son ${alumnos} <br> <br>`);
    }
    else{document.write("La materia no existe");}

}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("logica");
mostrarInformacion("programacion");



document.write("----------------------------------------------------------------------");

const cantidaddeClases= (alumno)=>{
    let cantidadTotal=0;
    let informacion=obtenerInformacion();
    let clasesPresentes=[];
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " +info); 
        }
    }
    return `El alumno ${alumno} esta en ${cantidadTotal} clases <br><br>
    esta cursando las clases =>${clasesPresentes}`;
}

document.write(`cantidad de materias: ${cantidaddeClases('kristy')}`)


const inscripcion = (alumno, materia) =>{
    prompt('En que materia deseas inscribirte?')
}