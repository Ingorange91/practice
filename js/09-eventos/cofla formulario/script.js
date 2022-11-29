const nombre=document.getElementById("nombre");
const email=document.getElementById("email");
const materia=document.getElementById("materia");
const enviar=document.getElementById("enviar");
const res=document.querySelector(".resultado");

enviar.addEventListener("click", (e)=>{
      //e.preventDefault();
      let error=validarCampos();
      if(error[0]){
            res.innerHTML=error[1];
            res.classList.remove("green");
            res.classList.add("red");
      }
      else{
            res.innerHTML="Solicitus enviada con exito";
            res.classList.remove("red");
            res.classList.add("green" );
      }

      
})

const validarCampos=()=>{
      let error=[];
      if(nombre.value.length < 5){
            error[0]=true;
            error[1]="El nombre no puede contener menos de 5 caracteres"
            return error;
      }
      else if(nombre.value.length > 40){
            error[0]=true;
            error[1]="El nombre no puede ocntener mas de 40 caracteres";
            return error
      }
      else if(email.value < 5 ||
              email.value > 40||
              email.value.indexOf("@")==-1 ||
              email.value.indexOf(".")==-1){

                  error[0]=true;
                  error[1]="Email invalido"
                  return error;
      }

      error[0]=false;
      return error;
}
