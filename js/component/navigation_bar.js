import { BaseComponent } from "../component/base_component.js";
import { getCurrentUser } from "../utility.js";

const style = /*html*/ `
    <style>
        .tab {
            font-family: 'Ubuntu', sans-serif;
        }
        a {
            text-decoration: none;
            margin: 0px 10px;
        }
        .nav-bar {
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            height: 60px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            position: fixed;
            z-index: 1;
        }
        .brand {
            width: 80px;
            height: auto;
            margin: 0px 20px;
        }
        .user-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0px 20px;
        }
    </style>
`;

class NavigationBar extends BaseComponent {
    constructor() {
        super();
        this.state = {
            data: {
                userAvatar: ''
            }
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">
            <div class="nav-bar">
                <img class="brand" src="../../img/logo/brand.png" alt="">
                <div class="tab">
                    <a href="index.html#!/explore">Explore</a>
                    <a href="index.html#!/search">Search</a>
                    <a href="index.html#!/publish-project">Publish project</a>
                </div>
                <div class="user-board">
                    <img class="user-avatar" src="${this.state.data.userAvatar}" alt="user-avatar">
                </div>
            </div>
        `;

        if (this.state.data.userAvatar == '') {
            this.state.data.userAvatar = getCurrentUser().avatar;
            this.setState(this.state);
        }

        this.$user = this._shadowRoot.querySelector('.user-board');
        this.$user.onclick = () => {
            router.navigate('index.html#!/user-board');
        }

        this.$brand = this._shadowRoot.querySelector('.brand');
        this.$brand.onclick = () => {
            router.navigate('/home');
        }
    }
}

window.customElements.define('navigation-bar', NavigationBar);