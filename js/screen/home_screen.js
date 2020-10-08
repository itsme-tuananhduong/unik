import { BaseComponent } from "../component/base_component.js";

class HomeScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <navigation-bar></navigation-bar>
            <choose-first-topic></choose-first-topic>
            <content-container></content-container>
            <modal-project-card></modal-project-card>
            <footer-box></footer-box>
        `;
    }
}

window.customElements.define('home-screen', HomeScreen);