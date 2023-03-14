console.log("%c¡ Funciones y Parametros!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
let product1=prompt("Ingresa el producto1");
    num1 = parseInt(prompt("Ingresa un numero    "));
let product2=prompt("Ingresa el producto2");
    num2 = parseInt(prompt("Ingresa segundo numero    "));
let product3=prompt("Ingresa el producto3")
    num3 = parseInt(prompt("Ingresa tercer numero    "));

const array = ([[product1, num1],[product2, num2],[product3, num3]]);
console.log("%c¡Object.fromEntries()!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto. toma una lista de pares con clave-valor y devuelve un nuevo objeto cuyas propiedades son dadas por éstas entradas.");
console.log(array);
const obj = Object.fromEntries(array);
console.log("const obj = Object.fromEntries(array);");
console.log(obj);