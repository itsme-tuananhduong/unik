import { BaseComponent } from "../component/base_component.js";
import { validateEmail, getDataFromDocs, setCurrentUser } from "../utility.js";

const style = /*html*/ ``;

class SignInForm extends BaseComponent {
    constructor() {
        super();
        this.state = {
            error: {
                email: '',
                password: ''
            },
            data: {
                email: '',
                password: ''
            }
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        <div class="wrapper">
            <form class="sign-in-form">
                <label for="email">Email address</label><br>
                <input type="email" class="email" name="email" value="${this.state.data.email}">
                <p class="email-error">${this.state.error.email}</p>
                <label for="password">Password</label><br>
                <input type="password" class="password" name="password" value="${this.state.data.password}">
                <p class="password-error">${this.state.error.password}</p>
            </form>
            <div class="btn">
                <button class="btn-cancel">Cancel</button>
                <button class="btn-sign-in">Sign In</button>
            </div>
            <a href="#!/sign-up">New user? Create an account</a>
        </div>
        `;

        this.$btnCancel = this._shadowRoot.querySelector('.btn-cancel');
        this.$btnCancel.onclick = () => {
            router.navigate('/get-started');
        }

        this.$btnSignUp = this._shadowRoot.querySelector('.btn-sign-in');
        this.$btnSignUp.onclick = async () => {
            // lay du lieu tu cac form
            let email = this._shadowRoot.querySelector('.email').value;
            let password = this._shadowRoot.querySelector('.password').value;

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
                if (response.empty) {
                    this.state.error.email = 'Your email has not been registered!';
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

            // update len local storage
            if (isValid) {
                let response = await firebase
                    .firestore()
                    .collection('user')
                    .where('email', '==', email)
                    .where('password', '==', password)
                    .get();
                if (response.empty) {
                    alert('Email or password is not correct!');
                } else {
                    let currentUser = getDataFromDocs(response.docs)[0];
                    setCurrentUser(currentUser);
                    router.navigate('/home');
                }
            } else {
                alert('Oops... Something is not correct!');
            }
            this.setState(this.state);
        }
    }
}

window.customElements.define('sign-in-form', SignInForm);