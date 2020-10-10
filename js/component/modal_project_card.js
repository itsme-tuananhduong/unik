import { BaseComponent } from "../component/base_component.js";
import { getDataFromDocs } from "../utility.js";

const style = /*html*/ `
    <style>
        .modal {
            display: none;
            position: fixed;
            z-index: 2;
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
            ID: ''
        }
        this.state = {
            'project-data': {
                ID: '',
                comment: [],
                content: [],
                cover: '',
                description: '',
                owner: '',
                publishDate: '',
                tag: [],
                title: '',
                totalRespect: 0
            },
            'owner-data': {
                ID: '',
                age: '',
                avatar: '',
                cover: '',
                description: '',
                email: '',
                follower: [],
                following: [],
                jobTitle: '',
                joinDate: '',
                label: '',
                location: '',
                project: [],
                savedProject: [],
                totalRespect: 0,
                userName: '',
                webReference: '',
                workExperience: ''
            },
            html: '',
            tag: '',
            isLoading: true
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="wrapper">
                
                <button class="btn">View detail</button>

                <div class="modal">
                    <span class="close">x</span>
                    <div class="modal-content">

                        <div class="project-owner">
                            <img class="owner-avatar" src="${this.state["owner-data"].avatar}" alt="owner-avatar">
                            <p class="owner-name">${this.state["owner-data"].userName}</p>
                            <button class="follow">Follow</button>
                        </div>

                        <div class="content">${this.state.html}</div>

                        <div class="side-bar">
                            <button class="follow">Follow</button>
                            <button class="save">Save</button>
                            <button class="Respect">Respect</button>
                        </div>

                        <div class="user-info">
                            <img src="${this.state["owner-data"].avatar}" alt="user-info" class="user-avatar">
                            <p class="user-name">${this.state["owner-data"].userName}</p>
                            <p class="user-location">${this.state["owner-data"].location}</p>
                            <button class="follow">Follow</button>
                        </div>

                        <div class="project-info">
                            <p class="project-title">${this.state["project-data"].title}</p>
                            <p class="project-description">${this.state["project-data"].description}</p>
                            <p class="project-total-respect">${this.state["project-data"].totalRespect}</p>
                            <p class="project-comment">${this.state["project-data"].comment.length}</p>
                            <p class="project-publish-date">${this.state["project-data"].publishDate}</p>
                        </div>

                        <div class="tag">${this.state.tag}</div>

                        <div class="comment-box"></div>
                    </div>
                </div>
            </div>
        `;

        this.$btn = this._shadowRoot.querySelector('.btn');
        this.$modal = this._shadowRoot.querySelector('.modal');
        this.$span = this._shadowRoot.querySelector('.close');
        this.$content = this._shadowRoot.querySelector('.modal-content');

        if (this.state.isLoading) {
            this.props.ID = this.id;
            let getData = async () => {
                let project = await firebase.firestore().collection('project').where('ID', '==', this.props.ID).get();
                this.state["project-data"] = getDataFromDocs(project)[0];
                let owner = await firebase.firestore().collection('user').doc(this.state["project-data"].owner).get();
                this.state["owner-data"] = owner.data();

                for (let i = 0; i < this.state["project-data"].content.length; i++) {
                    this.state.html += `<img src="${this.state["project-data"].content[i]}" alt="content">`;
                }

                for (let i = 0; i < this.state["project-data"].tag.length; i++) {
                    this.state.tag += `<p class="project-tag">${this.state["project-data"].tag[i]}</p>`;
                }

                this.setState(this.state);
            }
            getData();

            this.state.isLoading = false;
        }

        this.$btn.onclick = () => {
            this.$modal.style.display = 'block';
        }

        this.$span.onclick = () => {
            this.$modal.style.display = 'none';
        }

        this.$modal.onclick = (event) => {
            if (event.target == this.$modal) {
                this.$modal.style.display = 'none';
            }
        }
    }
}

window.customElements.define('modal-project-card', ModalProjectCard);