console.log("%c¡ Funciones y Parametros!",
  "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Arrow functions!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Las Arrow functions, funciones flecha o «fat arrow» son una forma corta de escribir funciones que aparece en Javascript a partir de ECMAScript 6. Básicamente, se trata de reemplazar eliminar la palabra function y añadir => antes de abrir las llaves:");
console.log("ahora un ejemplo")

const func = () => {
    console.log("Soy una funcion flecha :#")
    return;
  };

console.log(func)
console.log(func())
console.log("Diferentes formas de usar las Arrow");
const func1 = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
const func2 = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
const func3 = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b
