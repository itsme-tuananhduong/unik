import { BaseComponent } from "../component/base_component.js";
import { getCurrentUser } from "../utility.js";

const style = /*html*/ `
    <style>
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
            background-color: white;
            margin: 10% auto;
            padding: 25px;
            border: 1px solid black;
            width: 90%;
        }
        .close {
            color: black;
            float: right;
            font-size: 25px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
`;

class ModalProjectCard extends BaseComponent {
    constructor() {
        super();
        this.props = {
            ID: '2os0V5ZuCdBobfOyZC38'
        }
        this.state = {
            'project-data': {
                ownerAvatar: '',
                ownerName: '',
                comment: [],
                content: [],
                cover: '',
                description: '',
                publishDate: '',
                tag: [],
                title: '',
                totalRespect: 0
            },
            'owner-data': {

            }
        }
    }

    static get observedAttributes() {
        return ['id'];
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="wrapper">
                <div class="card">
                    <img class="cover" src="" alt="cover">
                    <div class="project-info">
                        <p class="title"></p>
                        <p class="label"></p>
                        <p class="total-respect"></p>
                    </div>
                    <div class="owner-info">
                        <img class="owner-avatar" src="" alt="owner-avatar">
                        <p class="owner-name"></p>
                    </div>
                </div>

                <p>${this.props.ID}</p>

                <button class="btn">Click here to Open Modal</button>

                <div class="modal">
                    <div class="modal-content">
                        <span class="close">x</span>

                        <div class="project-owner">
                            <img src="" alt="">
                        </div>

                        <div class="content"></div>

                        <div class="side-bar"></div>

                        <div class="user-info"></div>

                        <div class="project-info"></div>

                        <div class="tag"></div>

                        <div class="comment-box"></div>

                    </div>
                </div>
            </div>
        `;

        this.$btn = this._shadowRoot.querySelector('.btn');
        this.$modal = this._shadowRoot.querySelector('.modal');
        this.$span = this._shadowRoot.querySelector('.close');

        this.$btn.onclick = async () => {
            this.$modal.style.display = 'block';

            let project = await firebase.firestore().collection('project').doc(this.props.ID).get();

            let that = this;
            async function getOwnerData(project) {
                let projectOwner = await firebase.firestore().collection('user').doc(project.data().owner).get();
                console.log(projectOwner.data());
                let data = {
                    ownerAvatar: `${projectOwner.data().avatar}`,
                    ownerName: `${projectOwner.data().userName}`,
                    comment: [],
                    content: `${project.data().content}`,
                    cover: `${project.data().cover}`,
                    description: `${project.data().description}`,
                    publishDate: `${project.data().description}`,
                    tag: `${project.data().tag}`,
                    title: `${project.data().title}`,
                    totalRespect: `${project.data().totalRespect}`
                }
                console.log(data);
                that.setState(data);
            }
            getOwnerData(project);

        }

        this.$span.onclick = () => {
            this.$modal.style.display = 'none';
        }

        window.onclick = (event) => {
            if (event.target == this.$modal) {
                this.$modal.style.display = 'none';
            }
        }
    }
}

window.customElements.define('modal-project-card', ModalProjectCard);