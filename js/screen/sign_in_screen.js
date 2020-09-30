import { BaseComponent } from "../component/base_component.js";

class SignInScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <div class="sign-in-screen-wrapper">
                <sign-in-form></sign-in-form>
            </div>
        `;
    }
}

window.customElements.define('sign-in-screen', SignInScreen);