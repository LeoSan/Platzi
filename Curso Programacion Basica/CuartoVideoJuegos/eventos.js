//Declaro Variables
var vaca = {
    url:"vaca.png",
    cargaOk:false
};

var cerdo = {
    url:"cerdo.png",
    cargaOk:false
};

var pollo = {
    url:"pollo.png",
    cargaOk:false
};

var fondo = {
    url:"tile.png",
    cargaOk:false
};

var robot = {
    url:"dan.png",
    cargaOk:false,
    x_move:250,
    y_move:250
};

var teclas = {
    UP:38,
    DOWN:40,
    RIGHT:39,
    LEFT:37
};

var xOrigen = 150;
var yOrigen = 150;


var vp = document.getElementById('villaplatzi');
var papel = vp.getContext("2d");


//Cargo El fondo
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

//Animales
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollo);

robot.imagen = new Image();
robot.imagen.src = robot.url;
robot.imagen.addEventListener('load', cargarRobot);


//Simplemente anidamos un evento y lo anexamos a la funcion
var objetoDoc =  document.addEventListener('keyup', dibujoPorTeclado);

///// FUNCIONES

function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOk = true;
  dibujar();

}

function cargarCerdo(){
  cerdo.cargaOk = true;
  dibujar();

}

function cargarPollo(){
  pollo.cargaOk = true;
  dibujar();
}

function cargarRobot(){
  robot.cargaOk = true;
  dibujar();
  if (robot.cargaOk == true){
    //recibe un objeto imagen, y coodenada x, y
    papel.drawImage(robot.imagen, 150, 150);
  }
}

function dibujar(){
 if (fondo.cargaOk == true){
   //REcibe un objeto imagen, y coodenada x, y
    papel.drawImage(fondo.imagen, 0, 0);
 }

 if (vaca.cargaOk == true){

   var total = aleatorio(2, 10);
   for (var i = 0; i < total; i++) {
     var x = aleatorio(0, 6);
     var y = aleatorio(0, 6);
     x = x * 60;
     y = y * 60;

     //recibe un objeto imagen, y coodenada x, y
     papel.drawImage(vaca.imagen, x, y);
   }
 }

 if (cerdo.cargaOk == true){

   var total = aleatorio(0, 5);
   for (var i = 0; i < total; i++) {
     var x = aleatorio(0, 6); //6 es la distancia en pizxeles que se desea aletoriamente
     var y = aleatorio(0, 6);
     x = x * 40;
     y = y * 30;

     //recibe un objeto imagen, y coodenada x, y
     papel.drawImage(cerdo.imagen, x, y);
   }
 }

 if (pollo.cargaOk == true){

   var total = aleatorio(0, 4);
   for (var i = 0; i < total; i++) {
     var x = aleatorio(0, 6); //6 es la distancia en pizxeles que se desea aletoriamente
     var y = aleatorio(0, 6);
     x = x * 40;
     y = y * 30;

     //recibe un objeto imagen, y coodenada x, y
     papel.drawImage(pollo.imagen, x, y);
   }
 }


}//fin de dibujar


function aleatorio(numMin, numMax){
  var resultado;
  resultado = Math.floor( Math.random()  * (numMax - numMin + 1)) + numMin;
  return resultado;
}

function dibujoPorTeclado(evento){
  var movimiento = 10;
  //Usando swicth
  switch(evento.keyCode){
    case teclas.UP:
      dibujar();
      if ( yOrigen <= 10){
          alert("Lugar de colision UP");
          papel.drawImage(robot.imagen, xOrigen, yOrigen );
      }else {
        papel.drawImage(robot.imagen, xOrigen, yOrigen - movimiento );
        console.log("lugar de colision x=" + xOrigen + " y = " + yOrigen );
        yOrigen = yOrigen - movimiento;
      }

    break;
    case teclas.DOWN:
      dibujar();
      if ( yOrigen >= 370){
          alert("Lugar de colision Down");
          papel.drawImage(robot.imagen, xOrigen, yOrigen );
      }else {
        papel.drawImage(robot.imagen, xOrigen, yOrigen + movimiento );
          console.log("lugar de colision x=" + xOrigen + " y = " + yOrigen );
        yOrigen = yOrigen + movimiento;
      }
    break;
    case teclas.LEFT:
      dibujar();
      if (xOrigen <= -10 ){
          alert("Lugar de colision Left");
          papel.drawImage(robot.imagen, xOrigen, yOrigen );
      }else {
        papel.drawImage(robot.imagen, xOrigen - movimiento, yOrigen);
        console.log("lugar de colision x=" + xOrigen + " y = " + yOrigen );
        xOrigen = xOrigen - movimiento;
      }
    break;
    case teclas.RIGHT:
      dibujar();
      if (xOrigen >= 380 ){
          alert("Lugar de colision Right");
          papel.drawImage(robot.imagen, xOrigen, yOrigen );
      }else {
        papel.drawImage(robot.imagen, xOrigen + movimiento, yOrigen);
          console.log("lugar de colision x=" + xOrigen + " y = " + yOrigen );
        xOrigen = xOrigen + movimiento;
      }
    break;
    default:
      console.log("Ninguna");
    break;
  }//fin del switch

}//fin de la funcion
