console.log("%c¡ WebComponents!",
  "background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");


console.log("%c¡Atributos!",
"background:linear-gradient(#000, #555); color:#D4AF37; padding: 5px 10px;");
console.log("Por norma general, los atributos de nuestro custom element se utilizarán para pasar información desde el exterior al propio componente. Esta información puede ser de tipo textual  o simplemente no tener valor  y existir sólo para indicar alguna característica booleana de verdadero o falso.");
console.log("ejemplos")

console.log(".hasAttributes()");
let mymodale = document.querySelector(".unmodal");
if (mymodale.hasAttribute("class")) {
  console.log("El modal tiene el atributo class");
} else {
  console.log("El modal no tiene el atributo class");
}
console.log(".getAttributeNames()");
console.log(mymodale.getAttributeNames());
console.log(".getAttribute()");
console.log(mymodale.getAttribute("name"));
console.log(".removeAttribute()");
console.log("mymodale..removeAttribute(`name`)");
mymodale.removeAttribute("name");
console.log(mymodale.getAttributeNames());
setTimeout(() => {
  console.log(".setAttribute(`name`,`value`)");
  mymodale.setAttribute("name","modalbonito")
  console.log(mymodale.getAttributeNames());
}, 100);
console.log(".toggleAttribute(`name`,force)");
mymodale.toggleAttribute("class");


import mymodal from "./components/my-modal.js";