import { BaseComponent } from "../component/base_component.js";

class SearchScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        `;
    }
}

window.customElements.define('search-screen', SearchScreen);