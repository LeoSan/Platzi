/*********************************  LINEAS   ****************************************************************/
var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var inpLinea = document.getElementById('inpTotalLineas');
var bontLinea = document.getElementById('bntTotalLineas');

bontLinea.addEventListener('click', dibujoPorClic);


//ciclo

while (l < lineas ) {
  yi = 10 * l;
  xf = 10 * ( l + 1);
  dibujarLinea('red', 0, yi, xf, 300, lienzo);// Parabola Inferior
  dibujarLinea('black', xf,0,299,yi, lienzo); // Parabola Superior
  l++;

}

dibujarLinea('green', 1,1,1,299, lienzo); //Linea vertical Izquierda
dibujarLinea('green', 0,299,299,299, lienzo); //Linea Horizontal inferior verde

dibujarLinea('yellow', 100,0,50,100, lienzo);
dibujarLinea('yellow', 0,100,50,100, lienzo);

dibujarLinea('blue', 0,0,300,300, lienzo);//Linea azul inclinada Izquierda
dibujarLinea('blue', 299,0,0,299, lienzo);//Linea azul inclinada Derecha

dibujarLinea('blue', 0,0,299,0, lienzo); // Linea azul Horizontal Superior
dibujarLinea('blue', 299,0,299,299, lienzo);//Linea azul vertical Derecha


/*********************************      CUADRADO   ****************************************************************/

var canvasCuadrado = document.getElementById("cuadrado");
var lienzoCuadrado = canvasCuadrado.getContext("2d");

lienzoCuadrado.fillStyle = "green";
lienzoCuadrado.fillRect(10, 10, 100, 100);

/**************************FUNCIONES *********************************/
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();           //Inicio el trazo
	lienzo.strokeStyle = color;   // Color del trazo
	lienzo.moveTo(xinicial, yinicial);     //Mover la linea
	lienzo.lineTo(xfinal, yfinal);     //Traza la linea
	lienzo.stroke();             //Coloca la linea
	lienzo.closePath();          //finaliza el trazo
}


function dibujoPorClic(){
  var x = parseInt(inpLinea.value);                   //Lineas capturadas por usuario
  var d = document.getElementById('dibujitOpcional');
  var lienzo = d.getContext("2d");
  var ancho = d.width;
  var espacio = ancho / x;
  var lineas = x;
  var l = 0;
  var yi, xf;

  //ciclo
  while (l < lineas ) {
    yi = espacio * l;
    xf = espacio * ( l + 1);
    dibujarLinea('red', 0, yi, xf, ancho, lienzo);
    l++;
  }
}//fin de la funciones
