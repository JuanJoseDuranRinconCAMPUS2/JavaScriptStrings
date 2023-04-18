console.log("%c¡ Callbacks y Promise!",
  "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Callbacks!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan cuando se completa una tarea. Por ejemplo, en JavaScript, los callbacks se utilizan comúnmente en llamadas asíncronas a APIs o en eventos de interfaz de usuario.");
console.log("ahora un ejemplo")
console.log(`
  
let p1 = (e)=>{
  let mybody = document.querySelector("#prueba");
  mybody.insertAdjacentHTML("beforebegin", "
    <h1>Hola soy un texto generado con callbacks</h1>
  ")
}

addEventListener("click", p1);
");
console.log("Haz click para ver la magia ;3")

`
 
)

let p1 = (e)=>{
  let mybody = document.querySelector("#prueba");
  mybody.insertAdjacentHTML("beforebegin", `
    <h1>Hola soy un texto generado con callbacks</h1>
  `)
}

addEventListener("click", p1);
