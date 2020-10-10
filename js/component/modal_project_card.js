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
                            <img src="${this.state["owner-data"].avatar}" alt="owner-avatar">
                        </div>

                        <div class="content"></div>

                        <div class="side-bar"></div>

                        <div class="user-info"></div>

                        <div class="project-info"></div>

                        <div class="tag"></div>

                        <div class="comment-box"></div>
                        
                        <p>${this.props.ID}</p>
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