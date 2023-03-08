
console.log("%c¡ Metodo .raw()!",
            "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");


var miCadena = "   hola mundo, ¿me escuchan?   ";
let name = 'Pedro';

console.log("El método estatico String.raw() es una función de plantilla de literales (en-US), similar al prefijo r en Python o al prefijo @ en C# para strings literales (con ciertas diferencias: ver la explicación en este problema). Se utiliza para obtener un string crudo a partir de plantillas de string (es decir, el original, texto no interpretado).");
console.log(name)
console.log("console.log(String.raw`Hi\n${name}!`)");
console.log(String.raw`Hi\n${name}!`);
