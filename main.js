console.log("%c¡ Funciones y Parametros!",
  "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Funciones autoejecutables!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Pueden existir casos en los que necesites crear una función y ejecutarla sobre la marcha. En Javascript es muy sencillo crear funciones autoejecutables. Básicamente, sólo tenemos que envolver entre paréntesis la función anónima en cuestión (no necesitamos que tenga nombre, puesto que no la vamos a guardar) y luego, ejecutarla:");
console.log("ahora un ejemplo")
console.log(`(function(nombre){
    console.log("Hola Estimado usuario {nombre} bienvenido a esta consola")
})(prompt("ingresa tu nombre"));`);
(function(nombre){
    console.log(`Hola Estimado usuario ${nombre} bienvenido a esta consola`)
})(prompt("ingresa tu nombre"));
