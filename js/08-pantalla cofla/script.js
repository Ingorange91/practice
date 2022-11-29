// let alto=window.screen.availHeight; //screen.heigth
// let ancho=window.screen.availWidth; //screen.width

// comprar=confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

// if(comprar){
//     alert("Compra realizada con exito");
// }

// else{alert ("Compra canclada");}

let href=window.location.href;
let pathname=window.location.pathname;
let hostname=window.location.hostname;
let protocol=window.location.protocol;

let html=`href: ${href}<br><br> pathname: ${pathname}<br> hostname: ${hostname} protocol: ${protocol}`;
document.write(html);