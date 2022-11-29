class Celular{
    constructor(color, peso, resulucionPantalla, resulucionCamara, ram){
        this.color=color;
        this.peso=peso;
        this.resulucionPantalla=resulucionPantalla;
        this.resulucionCamara=resulucionCamara;
        this.ram=ram;
    }

    prender(){
        document.write("Prendiendo celular Bienvenido");
        document.write('<br><br>');
    }

    reiniciar(){
        document.write("Reiniciando porfavor espere.....");
        document.write('<br><br>');
    }   

    apagar(){
        document.write("Apagando adios");
        document.write('<br><br>');
    }

    tomarFoto(){
        document.write("Foto tomada con una resolucion de "+this.resulucionCamara);
        document.write('<br><br>');
    }

    grabar(){
        document.write("grabando video....");
        document.write('<br><br>');
    }

    info(){
        return `color ${this.color} peso ${this.peso} resolucion pantalla ${this.resulucionPantalla} resolucion camara ${this.resulucionCamara} ram ${this.ram }`
    }

    
}

class SuperCelular extends Celular{
    constructor(color, peso, resulucionPantalla, resulucionCamara, ram,exCamara){
        super(color, peso, resulucionPantalla, resulucionCamara, ram);
        this.extraCamara=exCamara;
    }

    camaralenta(){
        console.log('acti...vando....camar....lenta');
    }
    reocnocimientoFacial(){
        console.log('reconociendo cara');
    }

    infoAltaGama(){
        return `${this.info()}Resolucion de camara extra: ${this.extraCamara}`
    }

}

const samsung= new Celular('rojo','0.5kg','1220','38MP','8gb');
const iphone= new Celular('blanco','700gr','4k','50MP','16gb');
const hauwei= new Celular('azul','200gr','100','55MP','32gb');


document.write(`${samsung.info()}<br><br> ${iphone.info()}<br><br> ${hauwei.info()}`)
samsung.prender();
samsung.reiniciar();
samsung.tomarFoto();
samsung.grabar();
samsung.apagar();

document.write('------------------------------------------------------------------------------------------<br><br>');

const altaGama=new SuperCelular('azul','200gr','100','55MP','32gb','24MP');
const altaGama2=new SuperCelular('rojo','150g','150','60MP', '64hb','48MP');
altaGama.camaralenta();
altaGama.reocnocimientoFacial();

console.log(`${altaGama.infoAltaGama()}`);