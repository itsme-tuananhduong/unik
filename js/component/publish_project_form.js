import { BaseComponent } from "../component/base_component.js";

class PublishProjectForm extends BaseComponent {
    constructor() {
        super();
        this.state = {
            error: {
                content: '',
                cover: '',
                tag: '',
                title: ''
            },
            data: {
                comment: [],
                content: [],
                cover: '',
                description: '',
                owner: '',
                publishDate: '',
                tag: [],
                title: '',
                totalRespect: 0
            }
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        <link rel="stylesheet" href="../../css/style.css">
            <div class="wrapper">
                <div class="section-1">
                    <!-- upload cover -->
                    <div class="section-1-1">
                        <img src="" alt="cover">
                        <p class="cover-error">${this.state.error.cover}</p>
                        <form class="upload-cover">
                            <label for="project-cover">Project cover</label><br>
                            <input type="file" id="project-cover" name="project-cover">
                        </form>
                    </div>
                    <!-- nhap title, description,... -->
                    <div class="section-1-2">
                        <form class="upload-info">
                            <label for="title">Project title</label><br>
                            <input type="text" class="title" name="title" value="${this.state.data.title}"  placeholder="Enter your project title">
                            <p class="title-error">${this.state.error.title}</p>
                            <label for="title">Project description</label><br>
                            <input type="text" class="description" name="description" value="${this.state.data.description}" placeholder="Tell something about your project">
                        </form>
                        <div class="choose-tag-form">
                            <p class="tag-error">${this.state.error.tag}</p>
                            <form class="choose-tag">
                                <input type="checkbox" id="graphic-design" name="graphic-design" value="graphic-design">
                                <label for="graphic-design">Graphic design</label>
                                <input type="checkbox" id="photography" name="photography" value="photography">
                                <label for="photography">Photography</label>
                                <input type="checkbox" id="illustration" name="illustration" value="illustration">
                                <label for="illustration">Illustration</label>
                                <input type="checkbox" id="motion" name="motion" value="motion">
                                <label for="motion">Motion</label>
                                <input type="checkbox" id="product-design" name="product-design" value="product-design">
                                <label for="product-design">Product design</label>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- upload image -->
                <div class="section-2">
                    <img src="" alt="content">
                    <p class="content-error">${this.state.error.content}</p>
                    <form class="upload-content">
                        <label for="content">Add content</label><br>
                        <input type="file" id="content" name="content">
                    </form>
                </div>
            </div>
        `;
    }
}

window.customElements.define('publish-project-form', PublishProjectForm);