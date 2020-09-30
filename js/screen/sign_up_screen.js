import { BaseComponent } from "../component/base_component.js";

class SignUpScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <div class="sign-up-screen-wrapper">
                <sign-up-form></sign-up-form>
            </div>
        `;
    }
}

window.customElements.define('sign-up-screen', SignUpScreen);