console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Funciones por expresión!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("en Javascript es muy habitual encontrarse códigos donde los programadores «guardan funciones» dentro de variables, para posteriormente «ejecutar dichas variables». Se trata de un enfoque diferente, creación de funciones por expresión, que fundamentalmente, hacen lo mismo con algunas diferencias:");

const factura = function(){
  console.log("SISTEMA DE FACTURACION")
  console.log("----------------------")
  console.log("Precio: 243452")
  console.log("cantidad: 1")
  console.log("Total: 243452")
}

console.log(`const factura = function(){
  console.log("SISTEMA DE FACTURACION")
  console.log("----------------------")
  console.log("Precio: 243452")
  console.log("cantidad: 1")
  console.log("Total: 243452")
}`);

console.log(factura())