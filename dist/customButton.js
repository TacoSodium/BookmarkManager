export class CustomButton extends HTMLElement {
    constructor() {
        super();
        this._Colour = "";
        this.style.backgroundColor = "red";
        this.Button = document.createElement("button");
        this.Button.appendChild(document.createTextNode("Hello World"));
        this.appendChild(this.Button);
    }
    set colour(value) {
        this._Colour = value;
        if (this._Colour = "danger") {
            this.Button.style.backgroundColor = "red";
        }
        else {
            this.Button.style.backgroundColor = "";
        }
    }
    static get observedAttributes() { return ["colour"]; }
    ;
    attributeChangedCallback(name, newValue, oldValue) {
        if (name == "colour") {
            this.colour = newValue;
        }
        this._updateRendering();
    }
    connectedCallBack() {
        this._updateRendering();
    }
    _updateRendering() {
    }
}
