/*********************************  LINEAS   ****************************************************************/
var teclas = {
    UP:38,
    DOWN:40,
    RIGHT:39,
    LEFT:37
};

var x = 150;
var y = 150;

var objetoDoc =  document.addEventListener('keyup', dibujoPorTeclado);
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");

dibujarLinea('red', 149, 149, 151, 151, papel);


/**************************FUNCIONES *********************************/
function dibujoPorTeclado(evento){
  var colorcito = 'blue';
  var movimiento = 10;
  //Usando swicth
  switch(evento.keyCode){
    case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;

    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;

    break;
    default:
      console.log("Ninguna");
    break;
  }//fin del switch

}//fin de la funcion



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();           //Inicio el trazo
	lienzo.strokeStyle = color;   // Color del trazo
  lienzo.lineWidth = 3;   // Color del trazo
	lienzo.moveTo(xinicial, yinicial);     //Mover la linea
	lienzo.lineTo(xfinal, yfinal);     //Traza la linea
	lienzo.stroke();             //Coloca la linea
	lienzo.closePath();          //finaliza el trazo
}
