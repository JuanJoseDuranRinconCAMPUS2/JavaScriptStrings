
console.log("%c¡ Metodo .matchAll(regex)!",
            "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
var cadena = 'test1test2';
var regexp = /t(e)(st(\d?))/g;
console.log("El método matchAll() retorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, incluyendo grupos de captura.");
console.log(cadena)
console.log("console.log(texto.match(regexp))");


console.log(cadena.match(regexp));
