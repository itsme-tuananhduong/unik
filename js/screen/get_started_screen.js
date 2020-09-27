import { BaseComponent } from "../component/base_component.js";

class GetStartedScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        `;
    }
}

window.customElements.define('get-started-screen', GetStartedScreen);