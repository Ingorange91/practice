class Calculator{

    suma(val, val2){
        return  parseInt(val)+parseInt(val2);
    }

    resta(val, val2){
        return  parseInt(val)-parseInt(val2);
    }

    multiplicacion(val, val2){
        return  parseInt(val)*parseInt(val2);
    }

    division(val, val2){
        return  parseInt(val)/parseInt(val2);
    }

    potencia(val, val2){
        return  Math.pow(val,val2)
    }

    sqrt(val){
        return Math.sqrt(val);
    }

    sqrt3(val){
        return Math.sqrt3(val);
    }
}

let metodo=new Calculator();

document.write(metodo.potencia(2,4));

