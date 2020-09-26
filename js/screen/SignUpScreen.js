import {BaseComponent} from "../component/BaseComponent.js";

class SignUpScreen extends BaseComponent {
    constructor() {
        super();
    }
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            
        `;
    }
}

window.customElements.define('signup-screen', SignUpScreen);