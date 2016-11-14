var imagenes = [];
var coleccion = [];
imagenes["Cauchin"] = 'vaca.png';
imagenes["Pakacho"] = 'pollo.png';
imagenes["Tocinauro"] = 'cerdo.png';

class Pakiman {
  constructor(n, v, a){
    this.imagen = new Image();
    this.tipo   = 'tierra';
    this.nombre = n;
    this.vida = v;
    this.ataque  = a;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar(){
    alert(this.nombre)
  }
  mostrar(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong> " + this.nombre + " </strong><br/>");
    document.write("Vida " + this.vida + " <br/>");
    document.write("Ataque " + this.ataque + " <br/>");
    //document.write(this.imagen.src);
    document.write("<p>");
  }
}//fin de la clase

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pakacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var indice in coleccion){
  console.log(coleccion[indice]);
}


for(var objeto of coleccion){
  objeto.mostrar();
}
