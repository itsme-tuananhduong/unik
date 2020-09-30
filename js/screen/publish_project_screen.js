import { BaseComponent } from "../component/base_component.js";

class PublishProjectScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <div class="publish-project-screen">
                <publish-project-form></publish-project-form>
                <footer-box></footer-box>
            </div>
        `;
    }
}

window.customElements.define('publish-project-screen', PublishProjectScreen);