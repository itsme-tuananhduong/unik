import { BaseComponent } from "../component/base_component.js";

class ChooseFirstTopic extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        `;
    }
}

window.customElements.define('choose-first-topic', ChooseFirstTopic);