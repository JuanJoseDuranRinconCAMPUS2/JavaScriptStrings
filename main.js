
console.log("%c¡ Operadores lógicos!",
            "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
x = prompt("Ingresa un numero    ");
console.log("%c¡Valores booleanos (lógicos)!",
           "background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("%c¡OR lógico (||)!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.");

console.log("if (age >= 18 || age <= 65){ console.log(eres menor de edad)}");

if (x >= 0 || x >= 17) {
    console.log("eres menor de edad")
  }
