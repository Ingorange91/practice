class Animal{

    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.informacion=`soy ${this.especie} tengo ${edad} años y soy de color ${this.color}`
    }

    verInfo(){
        document.write(this.informacion);
        document.write('<br><br >');
    }

}

class Perro extends Animal{
    
    construtor(raza){
        this.raza=raza;
        
    }

    
    
    ladrar(){
        alert("waaw ");
        console.log("la raza es: "+this.raza);
    }

    // static aullar(){
    //     alert("aaaahuuuuuuu");
    // }

    
}



const perro = new Perro("perro", 5, "raro", "pitbull");
const pajaro = new Animal("pajaro", 1, "azul");
const gato = new Animal("gato", 3, "brown");

perro.verInfo();
perro.ladrar();
//Perro.aullar();
pajaro.verInfo();
gato.verInfo();