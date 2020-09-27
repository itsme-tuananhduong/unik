import { BaseComponent } from "../component/base_component.js";

class SignInScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        `;
    }
}

window.customElements.define('sign-in-screen', SignInScreen);