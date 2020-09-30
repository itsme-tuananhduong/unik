import { BaseComponent } from "../component/base_component.js";

class FooterBox extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <div class="footer-wrapper">
                <p>Footer chua lam xong dau :))</p>
                <footer></footer>
            </div>
        `;
    }
}

window.customElements.define('footer-box', FooterBox);