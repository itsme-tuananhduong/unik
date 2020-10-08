import { BaseComponent } from "../component/base_component.js";
import { getCurrentUser } from "../utility.js";

class ContentContainer extends BaseComponent {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        `;

        // lay id cua nguoi dung hien tai
        // let currentUserID = getCurrentUser();

        // lay thong tin nguoi dung trong truong follwing
        // let following = await firebase.firestore().collection('user').doc('${currentUserID}').get();


        // lay id tat ca project cua nguoi dung trong truong following

        // sap xep cac bai viet

        // setState
    }
}

window.customElements.define('content-container', ContentContainer);