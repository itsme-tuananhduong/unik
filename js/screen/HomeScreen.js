import {BaseComponent} from "../component/BaseComponent.js";

class HomeScreen extends BaseComponent {
    constructor() {
        super();
    }
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            
        `;
    }
}

window.customElements.define('home-screen', HomeScreen);