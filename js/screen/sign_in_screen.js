import { BaseComponent } from "../component/base_component.js";

class SignInScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <div class="sign-in-screen">
                <sign-in-form></sign-in-form>
                <footer-box></footer-box>
            </div>
        `;
    }
}

window.customElements.define('sign-in-screen', SignInScreen);