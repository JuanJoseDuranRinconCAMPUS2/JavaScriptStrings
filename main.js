console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡callbacks!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("un callback (llamada hacia atrás) es pasar una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función:");


const correcta = function () {
    console.log("Procesos autorizados puedes infresar");
  };
  
  // fError = Función Error (callback)
  const Error = function () {
    console.error("Error");
  };
  
  // fA = Función A
  const Calculo = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
  };
  
  Calculo(correcta, Error);
