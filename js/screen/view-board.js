import { BaseComponent } from "../component/base_component.js";

class ViewBoard extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        `;
    }
}

window.customElements.define('view-board', ViewBoard);