console.log("%c¡ Funciones y Parametros!",
  "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Clausuras!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Las clausuras o cierres, es un concepto relacionado con las funciones y los ámbitos que suele costar comprender cuando se empieza en Javascript. Es importante tener las bases de funciones claras hasta este punto, lo que permitirá entender las bases de una clausura.");
console.log("ahora un ejemplo")

console.log(`
const clausula = (function () {
    let num = 0;
    return function () {
      num++;
      console.log(num);
      return num;
    };
  })();
  
  clausula()
`)
const clausula = (function () {
    let num = 0;
    return function () {
      num++;
      console.log(num);
      return num;
    };
  })();
  
  clausula()
