import {BaseComponent} from "../component/BaseComponent.js";
import {validateEmail} from "../Utility.js";

const style = /*html*/ `

`;

class LoginScreen extends BaseComponent {
    constructor() {
        super();
    }
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
        `;
    }
}

window.customElements.define('login-screen', LoginScreen);