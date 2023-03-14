console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Creación de funciones!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Hay varias formas de crear funciones en Javascript: por declaración (la m;ás usada por principiantes), por expresión (la más habitual en programadores con experiencia) o mediante constructor de objeto (no recomendada): Constructor 	Descripción");

console.log("function nombre(p1, p2...) { }(Crea una función mediante declaración.)");

function ejemplo(){
  console.log("Esto es una funcion")
}

ejemplo()

console.log("var nombre = function(p1, p2...) { } (Crea una función mediante expresión.)");

var ejemplo = function(){
  console.log("Soy una funcion dentro de una variable")
}

console.log(ejemplo());

console.log(" new Function(p1, p2..., code); (Crea una función mediante un constructor de objeto.)")

new function(){console.log("Soy un metodo de funcion muy poco eficiente")};