console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Funciones como objetos!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Como curiosidad, debes saber que se pueden declarar funciones como si fueran objetos. Sin embargo, es un enfoque que no se suele utilizar en producción. Simplemente es interesante saberlo para darse cuenta que en Javascript todo pueden ser objetos:");

const factura = new function(){
  console.log("SISTEMA DE FACTURACION")
  console.log("----------------------")
  console.log("Precio: 243452")
  console.log("cantidad: 1")
  console.log("Total: 243452")
}

console.log(`const factura = new function(){
  console.log("SISTEMA DE FACTURACION")
  console.log("----------------------")
  console.log("Precio: 243452")
  console.log("cantidad: 1")
  console.log("Total: 243452")
}`);

console.log(factura)