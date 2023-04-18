console.log("%c¡ Callbacks y Promise!",
  "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Callbacks!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("En esencia, una promesa es un objeto que representa el resultado eventual de una operación asíncrona, y que puede estar en uno de tres estados: pendiente (cuando la operación aún no ha terminado), cumplido (cuando la operación se ha completado satisfactoriamente) o rechazado (cuando la operación ha fallado por alguna razón).");
console.log("ahora un ejemplo")
console.log(`
  
let p2 = (e)=>{
  new Promise((resolver, reject)=>{
    let mybody = document.querySelector("#prueba");
    setTimeout(() => {
      resolver(mybody.insertAdjacentHTML("beforebegin", "
      <h1>Hola soy un texto generado con callbacks y promise</h1>
    "));
    }, 5000);
   })
}
console.log("Haz click para ver la magia ;3")

`
 
)

let p1 = (e)=>{
    let count = 5;
  const intervalId = setInterval(() => {
    let mybody = document.querySelector("#prueba");
      mybody.insertAdjacentHTML("beforebegin", `
      <h1>Callback funcionando, espera ${count}sg</h1>
    `)
    count--;
    if (count <= 0) {
      clearInterval(intervalId);
      mybody.insertAdjacentHTML("beforebegin", `
      <h1>Callback terminado :3</h1>
    `)
    }
  }, 1000);
}

let p2 = (e)=>{
  new Promise((resolver, reject)=>{
    let mybody = document.querySelector("#prueba");
    setTimeout(() => {
      resolver(mybody.insertAdjacentHTML("beforebegin", `
      <h1>Hola soy un texto generado con callbacks y promise</h1>
    `));
    }, 5000);
   })
}

addEventListener("click", p1);
addEventListener("click", p2);

