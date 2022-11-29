class App{
    constructor(nombre, cantidadDescargas, puntuacion, peso){
        this.nombre=nombre
        this.cantidaDescargas=cantidadDescargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }

    Instalar(){
        if(this.instalada==false){
            alert('has instalado la aplicacion');
            this.instalada=true;
        }
    } 

    Desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            alert('desintalando la app..... se desinstalo con exito');
          
        }
    }

    Abrir(){
        if(this.instalada==true){
            alert('app iniciada');
            this.iniciada=true;
        }
    }

    Cerrar(){
        if(this.iniciada==true && this.instalada==true){
            alert('app cerrada');
            this.iniciada=false;
        }
    }

    appInfo(){
        return `${this.nombre} cantidd descargas: ${this.cantidaDescargas} calificacion: ${this.puntuacion} peso:${this.peso}<br><br>`
    }
}


aplicacion= new App('angrybirds','250','4','20MB');
aplicacion2= new App('babel','300','4.5','15MB');
aplicacion3= new App('facebook','2000','5','200MB');

document.write( aplicacion.appInfo(), aplicacion2.appInfo(), aplicacion3.appInfo());

aplicacion.Instalar();
aplicacion.Abrir();
aplicacion.Cerrar();
aplicacion.Desinstalar();

