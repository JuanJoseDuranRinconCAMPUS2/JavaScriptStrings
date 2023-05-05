let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");
export default class mymodal extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        console.log("etiqueta modal creada");
    }
    static get observedAttributes() {
        return ['atributo-cambiante'];
      }
    attributeChangedCallback(attributeName, oldValue, newValue) {
        console.log(`El atributo ${attributeName} ha cambiado de ${oldValue} a ${newValue}`);
    }
    hadledEvent(e){
        console.log(e);
        (e.type === "click") ? this.sendMessage(e) : console.log("error en la line 423");
       
    }
    sendMessage(e){
        const modal = this.shadowRoot.querySelector('.modal');
            e.preventDefault();
            modal.classList.add('modal--show');
    }
    ClosedEvent(e){
        (e.type === "click") ? this.sendMessage2(e) : console.log("error en la line 423");
       
    }
    sendMessage2(e){
        const modal = this.shadowRoot.querySelector('.modal');
            e.preventDefault();
            modal.classList.remove('modal--show');
    }
    connectedCallback(e){
        Promise.resolve(mymodal.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mybuttom = document.querySelector(".button");
            this.mybuttom.addEventListener("click", this.hadledEvent.bind(this));
            this.closeModal = this.shadowRoot.querySelector('.modal__close');
            this.closeModal.addEventListener("click", this.ClosedEvent.bind(this));
            this.mymodals = document.querySelector(".unmodal")
            this.mymodals.setAttribute('atributo-cambiante', 'Nuevo valor');
        })
    }
}



customElements.define(name, mymodal);