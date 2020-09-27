import { BaseComponent } from "../component/base_component.js";

class UserBoard extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        `;
    }
}

window.customElements.define('user-board', UserBoard);