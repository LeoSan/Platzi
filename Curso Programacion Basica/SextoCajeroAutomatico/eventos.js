var caja = [];
var entregado = [];
var papeles, dinero, div  = 0;
var resultado = document.getElementById("resultado");

class billete{
  constructor(v, c, n){
    this.valor = v;
    this.cantidad = c;
    this.nomImagen = n;
  }
}//fin de la clase


function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja){
    if(dinero > 0){
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad){
        papeles = bi.cantidad;
      }else{
        papeles = div;
      }
      entregado.push(new billete(bi.valor, papeles, bi.nomImagen));
      dinero = dinero - (bi.valor * papeles);
    }
  }//ciclo
  if (dinero > 0){
      resultado.innerHTML = "<strong>Cajero No tiene dinero.</strong>";
  }else{
      for( var e of entregado ){
          if (e.cantidad > 0){
          resultado.innerHTML = resultado.innerHTML +  e.cantidad  + " Billetes $ " + e.valor + " <img src='"+e.nomImagen +".jpg' width = '50px' height= '50px'  />  <br/>";
          }
        }
  }


}//fin de la funcion

caja.push(new billete(50, 20, "billete50"));
caja.push(new billete(20, 2, "billete20"));
caja.push(new billete(10, 2, "billete10"));

//Anido Evento
var b = document.getElementById('extraer');
b.addEventListener("click", entregarDinero);
