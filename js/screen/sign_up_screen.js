import { BaseComponent } from "../component/base_component.js";

class SignUpScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        `;
    }
}

window.customElements.define('sign-up-screen', SignUpScreen);