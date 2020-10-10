import { BaseComponent } from "../component/base_component.js";
import { getDataFromDocs, setGuest } from "../utility.js";

const style = /*html*/ `
    <style>
        .owner-info:hover,
        .owner-info:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
`;

class ProjectCard extends BaseComponent {
    constructor() {
        super();
        this.props = {
            ID: 'h9veexae6ct'
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

    static get observedAttributes() {
        return ['id'];
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="wrapper">
                <img class="cover" src="${this.state["project-data"].cover}" alt="cover">
                <div class="project-info">
                    <p class="title">${this.state["project-data"].title}</p>
                    <p class="label">${this.state["owner-data"].label}</p>
                    <p class="total-respect">${this.state["project-data"].totalRespect}</p>
                </div>
                <div class="owner-info">
                    <img class="owner-avatar" src="${this.state["owner-data"].avatar}" alt="owner-avatar">
                    <p class="owner-name">${this.state["owner-data"].userName}</p>
                </div>

                <modal-project-card id="${this.props.ID}"></modal-project-card>
            </div>
        `;

        if (this.state.isLoading) {
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

        this.$ownerInfo = this._shadowRoot.querySelector('.owner-info');
        this.$ownerInfo.onclick = async () => {
            setGuest(this.state["owner-data"]);
            router.navigate('index.html#!/view-board');
        }
    }
}

window.customElements.define('project-card', ProjectCard);