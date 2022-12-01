'use strict';
let edad=16;
//operador ternario
// (edad>=18) ? (console.log("es mayor de edad"),
//             console.log("puede pasar")
//             ): (console.log("menor de edad"),
//                 console.log("no puede pasar"));

//operator sprit
let valor1= "valor 1";
let valor2= "valor 2";
let valor3= "valor 3";
let arr=["valor 1","valor 2","valor 3"];
//console.log(...arr);


//Agregar array dentro de array con sprint
let array=["manzana", "pera","manzana"];
let array2=["sandia","melon","kiwi","papaya"];
//arr.push(array);//Esto mostrara que en la ultima posicon hay un array y no los elementos induviduales
arr.push(...array);//Desetructurara el array de forma individual dentro del array
//console.log(arr);

//De esta forma definimos un nuevo array concatenado si sobre escribir con el metodo push
let arraynuevo_concatnad=[...array, ...array2];
//console.log(arraynuevo_concatnad);


/********************************************************************/
//desetructuracion en operaciones
const sumar=(num1, num2)=>{
    console.log(num1+num2);
}

//En caso de pasarle mas parametros que los que recibira la funcion solo admitira los primeros dos valores e ignorar los demas valores del array
let arraySuma=[3,10];
sumar(...arraySuma)

