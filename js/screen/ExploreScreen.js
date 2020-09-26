import {BaseComponent} from "../component/BaseComponent.js";

class ExploreScreen extends BaseComponent {
    constructor() {
        super();
    }
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            
        `;
    }
}

window.customElements.define('explore-screen', ExploreScreen);