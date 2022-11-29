const container=document.querySelector(".grid-container");
const buton=document.querySelector(".confirmar");

buton.addEventListener("click",()=>{

    let confirmar=confirm("Estas seguro de la presentacion de los examenes");
    if(confirmar){

        document.body.removeChild(buton);
        let elementos=document.querySelectorAll(".semana");
        let semanasElegidas=document.querySelectorAll(".semana-elegida")
        for(elemento in elementos){
            semana=elementos[elemento];
            semana.innerHTML=semanasElegidas[elemento].value;
        }
    }
});

let alumnos=[{
        nombre: "Ernesto ramirez",
        email: "ernesto@gmail.com",
        materia: "fisica"
    },

    {
        nombre: "jose",
        email: "jose@gmail.com",
        materia: "quimica"
    },

    {
        nombre: "ramirez",
        email: "ramirez@gmail.com",
        materia: "español"
    },

    {
        nombre: "Ernesto ramirez",
        email: "orange@gmail.com",
        materia: "matematicas"
    },

    {
        nombre: "kristy",
        email: "kristy@gmail.com",
        materia: "biologia"
    },
];



for(alumno in alumnos){
    let datos=alumnos[alumno];
    let nombre= datos["nombre"];
    let email=datos["email"];
    let materia=datos["materia"];
    let htmlCode=`
    
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="semana 1">Semana 1</option>
                <option value="semana 2">Semana 2</option>
            </select>
        </div>
    `;
    container.innerHTML+=htmlCode;
}


