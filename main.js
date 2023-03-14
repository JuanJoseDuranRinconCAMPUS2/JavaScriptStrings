console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡FormData([form])!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Los objetos FormData le permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest. Están destinados principalmente para el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados. ");

console.log("Ahora un ejemplo de FormData y su organizacion respectiva")
let formData = new FormData();
formData.append('Valor1', '456343');
formData.append('Valor2', '213434');

for(let [name, value] of formData) {
  alert(`${name} = ${value}`);
}