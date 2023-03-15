console.log("%c¡ Funciones y Parametros!",
  "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Ámbito léxico de this!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Aunque aún no la hemos utilizado, una de las principales diferencias de las funciones flecha respecto a las funciones tradicionales, es el valor de la palabra clave this, que no siempre es la misma.");
console.log("ahora un ejemplo")
padre = {
    a: function () {
      console.log(this);
    },
    b: () => {
      console.log(this);
    },
  };
  
  padre.a(); // padre
  padre.b(); // Window
