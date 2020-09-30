import { BaseComponent } from "../component/base_component.js";
import { validateEmail, randomID } from "../utility.js";

const style = /*html*/ ``;

class SignUpForm extends BaseComponent {
    constructor() {
        super();
        this.state = {
            error: {
                email: '',
                password: '',
                userName: '',
                age: '',
                location: ''
            },
            data: {
                ID: '',
                age: '',
                description: '',
                email: '',
                follower: [],
                following: [],
                jobTitle: '',
                joinDate: '',
                label: '',
                location: '',
                password: '',
                project: [],
                savedProject: [],
                totalRespect: 0,
                userName: '',
                webReference: [],
                workExperience: ''
            }
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="wrapper">
                <form class="sign-up-form">
                    <label for="email">Email address</label><br>
                    <input type="email" class="email" name="email" value="${this.state.data.email}">
                    <p class="email-error">${this.state.error.email}</p>
                    <label for="password">Password</label><br>
                    <input type="password" class="password" name="password" value="${this.state.data.password}">
                    <p class="password-error">${this.state.error.password}</p>
                    <label for="name">Your name</label><br>
                    <input type="text" class="name" name="name" value="${this.state.data.userName}">
                    <p class="name-error">${this.state.error.userName}</p>
                    <label for="age">Your age</label><br>
                    <input type="text" class="age" name="age" value="${this.state.data.age}">
                    <p class="age-error">${this.state.error.age}</p>
                    <label for="location">Your location</label><br>
                    <input type="text" class="location" name="location" value="${this.state.data.location}">
                    <p class="location-error">${this.state.error.location}</p>
                </form>
                <div class="btn">
                    <button class="btn-cancel">Cancel</button>
                    <button class="btn-sign-up">Sign Up</button>
                </div>
                <a href="#!/sign-in">Already have an account? Sign in</a>
            </div>
        `;

        this.$btnCancel = this._shadowRoot.querySelector('.btn-cancel');
        this.$btnCancel.onclick = () => {
            router.navigate('/get-started');
        }

        this.$btnSignUp = this._shadowRoot.querySelector('.btn-sign-up');
        this.$btnSignUp.onclick = async () => {
            // lay du lieu tu cac form
            let email = this._shadowRoot.querySelector('.email').value;
            let password = this._shadowRoot.querySelector('.password').value;
            let name = this._shadowRoot.querySelector('.name').value;
            let age = this._shadowRoot.querySelector('.age').value;
            let location = this._shadowRoot.querySelector('.location').value;

            // kiem tra du lieu duoc nhap vao
            let isValid = true;

            if (email == '' || !validateEmail(email)) {
                this.state.error.email = 'Your email is invalid!';
                isValid = false;
            } else {
                let response = await firebase
                    .firestore()
                    .collection('user')
                    .where('email', '==', email)
                    .get();
                if (!response.empty) {
                    this.state.error.email = 'Your email has already been used!';
                    isValid = false;
                } else {
                    this.state.data.email = email;
                }
            }

            if (password == '') {
                this.state.error.password = 'Your password is invalid!';
                isValid = false;
            } else {
                this.state.data.password = password;
            }

            if (name == '') {
                this.state.error.userName = 'Your name is invalid!';
                isValid = false;
            } else {
                this.state.data.userName = name;
            }

            if (age == '' || Number(age) <= 0) {
                this.state.error.age = 'Your age is invalid!';
                isValid = false;
            } else {
                this.state.data.age = age;
            }

            if (location == '') {
                this.state.error.location = 'Your location is invalid!';
                isValid = false;
            } else {
                this.state.data.location = location;
            }

            // update len firebase
            if (isValid) {
                // set ID va joinDate
                this.state.data.ID = randomID();
                this.state.data.joinDate = new Date().toLocaleString();
                // up du lieu len firebase
                await firebase.firestore().collection('user').add(this.state.data);
                alert('Sign up successfully!');
            } else {
                alert('Oops... Something is not correct!');
            }
            this.setState(this.state);
        }
    }
}

window.customElements.define('sign-up-form', SignUpForm);