console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Funciones por declaración!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("obablemente, la forma más popular de estas tres, y a la que estaremos acostumbrados si venimos de otros lenguajes de programación, es la primera, a la creación de funciones por declaración. Esta forma permite declarar una función que existirá a lo largo de todo el código:");

function imprimir(){
  console.log("SISTEMA DE FACTURACION")
  console.log("----------------------")
  console.log("Precio: 243452")
  console.log("cantidad: 1")
  console.log("Total: 243452")
}

console.log(`function imprimir(){
  console.log("SISTEMA DE FACTURACION")
  console.log("----------------------")
  console.log("Precio: 243452")
  console.log("cantidad: 1")
  console.log("Total: 243452")
}`);
imprimir()