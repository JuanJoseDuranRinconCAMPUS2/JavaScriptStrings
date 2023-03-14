console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Funciones anónimas!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla:");

const factura = function(){
  console.log("SISTEMA DE FACTURACION")
  console.log("----------------------")
  console.log("Precio: 243452")
  console.log("cantidad: 1")
  console.log("Total: 243452")
}


console.log(factura);
factura()